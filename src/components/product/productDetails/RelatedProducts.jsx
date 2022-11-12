import React, { useMemo, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ShopServices from "../../../api/ShopServices";
import { cartDataAction, minus, plus, returnCount } from "../../../redux/actions/shop/ShopAction";
import { customPosition } from "../../../utils/Modals";

export const RelatedProducts = ({ id }) => {
  const { relatedProducts, cartData } = useSelector((state) => state.shopValue);
  // console.log(relatedProducts);

  const { authenticated } = useSelector((state) => state.authValue);
  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      count: 1,
      dataValue: [],
      star: 0,
    }
  );
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
      product_id: id,
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




  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(cartDataAction());


  }, [dispatch]);

  let quantity = (id) => {
    const count = dispatch(returnCount(cartData, id));
    return count;
  };
  let relatedProduct = relatedProducts.map((rProd, index) => (
    <div>
      <SwiperSlide>
        <div className="single-product">
          <div className="img">
            <img src={rProd.image_one} alt="img" />

            <span className="sale">{rProd.percentage}</span>
            <ul className="more-links">
              <li>
                <a href="#">
                  <i className="fas fa-cart-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="product-details.php">
                  <i className="far fa-eye"></i>
                </a>
              </li>
              <li>
                <a href="product-details.php">
                  <i className="fas fa-exchange-alt"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="price">
              <span>${Math.floor((rProd.price / 100) * rProd.percentage)}</span>
              <span>
                <del>${rProd.price}</del>
              </span>
            </div>
            <h4 className="title">{rProd.title}</h4>
            <p className="o__procard">{rProd.category}</p>
            <div className="review-area">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="separator">|</span>
              <span className="review-content">229 review</span>
            </div>
            <div className="input-counter0">
              <div className="qtySelector text-center">
                <i className="fas fa-minus decreaseQty" onClick={() => dispatch(minus(rProd?.id))}></i>
                <input
                  type="text"
                  className="qtyValue"
                  // id={`plus${product.id}`}
                  // onChange={(e) => setState({ productCount: e.target.value })}
                  value={quantity(
                    rProd?.id
                  )}
                />
                <i
                  className="fas fa-plus increaseQty"
                  onClick={() => dispatch(plus(rProd?.id))}
                ></i>
              </div>
            </div>
            <Link className="hover-effect" to={`/shop/${rProd?.id}`}>
              <span className="font-16-semibold">Buy Now</span>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </div>
  ));

  return (
    <div className="related-product-section">
      <div className="col-lg-12">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="content">
              <div className="section-header">
                <h6 className="sub-title">Hot Products</h6>
                <h2 className="title extra-padding">Related To This Item</h2>
              </div>
            </div>
          </div>
        </div>

        <div
          id="o__product"
          className="container bottom-content wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="swiper mySwiper2">
            <Swiper
              slidesPerView={3}
              loop={true}
              spaceBetween={20}
              // modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                560: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                950: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              className="swiper-wrapper"
            >
              {relatedProduct}
            </Swiper>
          </div>
        </div>
        <div className="review my3">
          <div>
            <h4 className="mt-4">Review product</h4>
            <textarea
              placeholder="Review"
              name="details"
              value={state.details}
              onChange={(e) => setState({ details: e.target.value })}
            ></textarea>
            <div className="stars">{starsRating}</div>

            <button
              className="custom-button btn-block mx-auto"
              onClick={reviewProduct}
            >
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoRelatedProducts = React.memo(RelatedProducts);
