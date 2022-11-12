/** @format */

import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  addToCart,
  cartDataAction,
  minus,
  plus,
  PriceAfterPercentage,
  RelatedProductAction,
  returnCount,
  singleProductList,
} from "../../../redux/actions/shop/ShopAction";
// import { getCart } from "../../../redux/slices/ShopSlices";
import { getCart } from "../../../utils/functions";
import MaterialsTabs from "./MaterialsTabs";
import { RelatedProducts } from "./RelatedProducts";
import SharedLink from "./SharedLink";

function ProductDetailsBody() {
  let { id } = useParams();
  let dispatch = useDispatch();
  const { singleProductData, cartData } = useSelector(
    (state) => state.shopValue
  );

  console.log("singleProductData", singleProductData);

  const cartItem = getCart("cart");

  useEffect(() => {
    dispatch(singleProductList(id));
    dispatch(cartDataAction());
  }, []);

  useEffect(() => {
    dispatch(RelatedProductAction(singleProductData?.data?.category));
  }, [singleProductData?.data?.category]);

  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      count: 1,
      relatedProducts: [],
    }
  );

  const count = dispatch(returnCount(cartData, id));
  console.log(cartData, "dfdfkdkf");

  // let addTocart = () => {
  //   let values = {
  //     id: singleProductData.data.id,
  //     name: singleProductData?.data.title,
  //     price: singleProductData?.data.price,
  //     itemCount: state.count,
  //     image: singleProductData?.data.image_one,
  //     category: singleProductData?.data.category,
  //   };
  //   dispatch(cartDataFunc(values));
  //   setCart(values);
  // };

  //console.log("state. re:>> ", state?.relatedProducts);
  // let plus = () => {
  //   setState({ count: state.count + 1 });
  // };

  // let minus = () => {
  //   state.count > 1
  //     ? setState({ count: state.count - 1 })
  //     : setState({ count: 1 });
  // };

  let images = "";
  if (singleProductData?.data) {
    images = images = (
      <div className="xzoom-thumbs mt-5">
        <div className="all-slider owl-carousel">
          {/* <a href="assets/images/shoping/SingleShop/01.jpg"> */}
          <img
            className="xzoom-gallery5"
            width="80"
            src={singleProductData.data?.image_one}
            title="The description goes here"
            alt=""
          />
          {/* </a> */}

          {/* <a href="assets/images/shoping/SingleShop/02.jpg"> */}
          <img
            className="xzoom-gallery5"
            width="80"
            src={singleProductData.data?.image_two}
            title="The description goes here"
            alt=""
          />
          {/* </a> */}

          {/* <a href="assets/images/shoping/SingleShop/03.jpg"> */}
          <img
            className="xzoom-gallery5"
            width="80"
            src={singleProductData.data.image_three}
            title="The description goes here"
            alt=""
          />
          {/* </a> */}
          {/* <a href="assets/images/shoping/SingleShop/04.jpg"> */}
          <img
            className="xzoom-gallery5"
            width="80"
            src={singleProductData.data.image_four}
            title="The description goes here"
            alt=""
          />
          {/* </a> */}
        </div>
      </div>
    );
  }

  let items = "";

  if (singleProductData?.data) {
    items = (
      <div className="item-list">
        <ul className="d-flex">
          <li>
            {/* <a href="#"> */}
            <img src={singleProductData.data?.image_one} alt="image" />
            {/* </a> */}
          </li>
          <li>
            {/* <a href="#"> */}
            <img src={singleProductData?.data?.image_two} alt="image" />
            {/* </a> */}
          </li>
          <li>
            {/* <a href="#"> */}
            <img src={singleProductData?.data.image_three} alt="image" />
            {/* </a> */}
          </li>
          <li>
            {/* <a href="#"> */}
            <img src={singleProductData?.data.image_four} alt="image" />
            {/* </a> */}
          </li>
        </ul>
      </div>
    );
  }

  let body = "";
  if (singleProductData?.data) {
    body = (
      <section className="product-details-section">
        <div className="overlay">
          <div className="container">
            <div className="row mb-90co">
              <div className="col-lg-7">
                <div className="xzoom-container">
                  <img
                    className="xzoom5"
                    id="xzoom-magnific"
                    src={singleProductData.data.image_one}
                    alt=""
                    // xoriginal="assets/images/shoping/SingleShop/01.jpg"
                  />
                  {images}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="right-area">
                  <div className="product-info">
                    <ul>
                      <li className="product-stock">
                        <div className="stock-box">
                          <span className="value-title">Availability: </span>
                          <span className="value-content">
                            {"  " + singleProductData.data.status}
                          </span>
                        </div>
                        <div className="stock-icon">
                          <a href="#">
                            <i className="fas fa-heart"></i>
                          </a>
                        </div>
                      </li>
                      <li className="product-title-area">
                        <h1 className="product-title">
                          {singleProductData.data.title}
                        </h1>
                      </li>
                      <li>
                        <div className="review-block">
                          <p className="star-review">
                            <a href="#" className="star">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="#" className="reviews">
                              {" "}
                              <span>129</span> review{" "}
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>

                    <div className="product-price">
                      <p className="price">
                        $
                        <span id="sizeprice">
                          {dispatch(
                            PriceAfterPercentage(
                              singleProductData.data.price,
                              singleProductData.data.percentage
                            )
                          ) * count}
                        </span>
                      </p>
                    </div>

                    {/* <ul className="offers">
                    <li>
                      <p>Order 2, get 15% off</p>
                    </li>
                    <li>
                      <p>Order 3, get 20% off</p>
                    </li>
                  </ul> */}

                    <div className="product-color">
                      <p className="title">Color:</p>
                      <ul className="color-list">
                        <li>
                          <span className="box">Red</span>
                        </li>
                      </ul>
                    </div>

                    {items}
                    <div className="input-counter d-flex">
                      <div className="qtySelector text-center">
                        <i
                          className="fas fa-minus decreaseQty"
                          onClick={() =>
                            dispatch(minus(singleProductData?.data?.id))
                          }
                        ></i>
                        <input
                          type="text"
                          className="qtyValue"
                          id="qtyValue"
                          min
                          value={count ?? 1}
                        />
                        <i
                          className="fas fa-plus increaseQty"
                          onClick={() =>
                            dispatch(plus(singleProductData?.data?.id))
                          }
                        ></i>
                      </div>
                      <Link to="/cart">
                        <button
                          className="add-cart-btn custom-button"
                          onClick={() =>
                            dispatch(addToCart(singleProductData?.data?.id))
                          }
                        >
                          <i className="icofont-shopping-cart"></i>
                          Add to Cart
                        </button>
                      </Link>
                    </div>

                    <SharedLink />
                  </div>
                </div>
              </div>
            </div>
            {/* <Materials /> */}
            <MaterialsTabs />
            <RelatedProducts
              category={singleProductData.data?.category}
              id={singleProductData?.data.id}
            />
            {/* {state.relatedProducts.length > 0 ? ( */}
            {/* <RelatedProducts productValue={state.relatedProducts} /> */}
            {/* ) : ( */}
            {/* "" */}
            {/* )} */}
          </div>
        </div>
      </section>
    );
  }
  return <div className="main-body">{body}</div>;
}

export default ProductDetailsBody;
