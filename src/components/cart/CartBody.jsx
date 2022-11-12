/** @format */

import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShopServices from "../../api/ShopServices";
import {
  allProductAction,
  cartDataAction,
  minus,
  plus,
  PriceAfterPercentage,
  removeFromCart,
  returnCount,
} from "../../redux/actions/shop/ShopAction";
import { customPosition } from "../../utils/Modals";

const CartBody = () => {
  const { allProducts, cartData } = useSelector((state) => state.shopValue);
  const { authenticated } = useSelector((state) => state.authValue);
  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      count: 1,
      dataValue: [],
      star: 0,
    }
  );
  let carts = allProducts.filter(function (item) {
    let cartId = cartData.map((item) => item.id);
    // console.log(cartId);
    // console.log(cartId.indexOf(item.id));
    return cartId.indexOf(item.id) !== -1;
  });
  // console.log(carts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProductAction());
    dispatch(cartDataAction());
  }, []);

  const count = (id) => dispatch(returnCount(cartData, id));
  // console.log(count(2));

  let total = 0;
  carts.map((prod, index) => {
    let sub =
      dispatch(PriceAfterPercentage(prod?.price, prod?.percentage)) *
      count(prod.id);
    total = total + sub;
  });

  // console.log(total);
  let activeStar = (i) => {
    // //console.log("i :>> ", i);
    setState({ star: i });
  };

  let starsRating = [];
  for (let i = 1; i <= 5; i++) {
    starsRating.push(
      <i
        className={
          state.star === i || state.star > i
            ? "fas fa-star active"
            : "fas fa-star"
        }
        onClick={() => activeStar(i)}
        key={i}
      ></i>
    );
  }

  let reviewProduct = async () => {
    let values = {
      product_id: state.dataValue?.id,
      review: state.details,
      rating: state.star,
    };
    if (authenticated) {
      let res = await ShopServices.review(values);
      if (res.status === 201) {
        customPosition("center", "success", res.data.message);
        // getagentListData();
        setState({
          count: 1,
          dataValue: [],
          star: 0,
          details: "",
        });
      }
    }
  };

  return (
    <section>
      <div className="row">
        <div className="col-lg-8">
          <div className="mb-3">
            <div className="pt-4 wish-list">
              <h5 className="mb-4">
                Cart (<span>{carts?.length}</span> items)
              </h5>

              <div className="row mb-4">
                {carts.map((cart, index) => (
                  <>
                    <div
                      className="col-md-5 col-lg-3 col-xl-3 mt-3"
                      key={index}
                    >
                      <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img
                          className="img-fluid w-100"
                          src={cart?.image_one}
                          alt="Sample"
                        />
                        <a href="#!"></a>
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-9 col-xl-9">
                      <div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5>Blue denim shirt</h5>
                            <p className="mb-3 text-muted text-uppercase small">
                              Shirt - blue
                            </p>
                            <p className="mb-2 text-muted text-uppercase small">
                              Color: blue
                            </p>
                            <p className="mb-3 text-muted text-uppercase small">
                              Size: M
                            </p>
                          </div>

                          <div className="input-counter d-flex">
                            <div className="qtySelector text-center">
                              <i
                                className="fas fa-minus decreaseQty"
                                onClick={() => dispatch(minus(cart?.id))}
                              ></i>
                              <input
                                type="text"
                                className="qtyValue"
                                id="qtyValue"
                                min=""
                                value={count(cart?.id)}
                              />
                              <i
                                className="fas fa-plus increaseQty"
                                onClick={() => dispatch(plus(cart.id))}
                              ></i>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="#!"
                              type="button"
                              className="card-link-secondary small text-uppercase mr-3"
                              onClick={() => dispatch(removeFromCart(cart?.id))}
                            >
                              <i className="fas fa-trash-alt mr-1"></i> Remove
                              item{" "}
                            </a>
                            <a
                              href="#!"
                              type="button"
                              className="card-link-secondary small text-uppercase"
                            >
                              <i className="fas fa-heart mr-1"></i> Move to wish
                              list{" "}
                            </a>
                          </div>
                          <p className="mb-0">
                            <span>
                              <strong id="summary">
                                ${cart?.price * count(cart.id)}
                              </strong>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <hr className="mb-4" />

              <p className="text-primary mb-0">
                <i className="fas fa-info-circle mr-1"></i> Do not delay the
                purchase, adding items to your cart does not mean booking them.
              </p>
            </div>
          </div>

          <div className="mb-3">
            <div className="pt-4">
              <h5 className="mb-4">Expected shipping delivery</h5>

              <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
            </div>
          </div>

          <div className="mb-3">
            <div className="pt-4">
              <h5 className="mb-4">We accept</h5>

              <img
                className="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa"
              />
              <img
                className="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express"
              />
              <img
                className="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard"
              />
              <img
                className="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                alt="PayPal acceptance mark"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="mb-3">
            <div className="pt-4">
              <h5 className="mb-3">The total amount of</h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Temporary amount
                  <span>$25.98</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>The total amount of</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>${total}</strong>
                  </span>
                </li>
              </ul>

              <Link
                to={`/checkout/shop/1`}
                className="custom-button btn-block mx-auto"
              >
                go to checkout
              </Link>
            </div>
          </div>

          {/* <!-- <div className="mb-3">
            <div className="pt-4">

              <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Add a discount code (optional)
                <span><i className="fas fa-chevron-down pt-1"></i></span>
              </a>

              <div className="collapse" id="collapseExample">
                <div className="mt-3">
                  <div className="md-form md-outline mb-0">
                    <input type="text" id="discount-code" className="form-control font-weight-light" placeholder="Enter discount code">
                  </div>
                </div>
              </div>
            </div>
          </div> --> */}
        </div>
      </div>
    </section>
  );
};

export default CartBody;
