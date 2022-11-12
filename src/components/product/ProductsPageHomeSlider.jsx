import { useMemo, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cartDataAction, minus, plus, returnCount, suggestedProductList, topProductList } from "../../redux/actions/shop/ShopAction";
import { getCart, setCart } from "../../utils/functions";
import ProductPageHomeLayout from "./ProductPageHomeLayout";
const ProductsPageHomeSlider = () => {
  const { topProductsData, cartData } = useSelector((state) => state.shopValue);


  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(cartDataAction());
    dispatch(topProductList());


  }, [dispatch]);

  let quantity = (id) => {
    const count = dispatch(returnCount(cartData, id));
    return count;
  };
  let products = ""
  if (topProductsData?.data?.data?.length > 0) {
    products = topProductsData?.data?.data.map((product, index) => {
      let getCartD = getCart()[index + 1] || 0;
      // console.log("getCartD :>> ", getCartD);
      return (
        <div key={`${index}`}>
          <SwiperSlide>
            <div className="single-product">
              <div className="img">
                <img src={product.image_one} alt="img" />
                <span className="sale">{product.percentage}</span>
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
                  <span>
                    ${Math.floor((product.price / 100) * product.percentage)}
                  </span>
                  <span>
                    <del>${product?.price}</del>
                  </span>
                </div>
                <h4 className="title">{product.title}</h4>
                <p className="o__procard">{product.category}</p>
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
                    <i className="fas fa-minus decreaseQty" onClick={() => dispatch(minus(product?.id))}></i>
                    <input
                      type="text"
                      className="qtyValue"
                      // id={`plus${product.id}`}
                      // onChange={(e) => setState({ productCount: e.target.value })}
                      value={quantity(
                        product?.id
                      )}
                    />
                    <i
                      className="fas fa-plus increaseQty"
                      onClick={() => dispatch(plus(product?.id))}
                    ></i>
                  </div>
                </div>
                <Link className="hover-effect" to={`/shop/${product?.id}`}>
                  <span className="font-16-semibold">Buy Now</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </div>
      );
    });
  }
  return (
    <ProductPageHomeLayout>
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
            {products}
          </Swiper>
        </div>
      </div>
    </ProductPageHomeLayout>
  );
};
export default ProductsPageHomeSlider;

// export const MemoProducts = React.memo(Products);
