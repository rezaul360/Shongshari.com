import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartDataAction,
  returnCount,
} from "../../../redux/actions/shop/ShopAction";
import CourseConstant from "./Constants";
import SuggestedProduct from "./SuggestedProduct";
import { MemoTopRated } from "./TopRated";
import TopRatedProduct from "./TopRatedProduct";

function ProductTabs({ tabNow }) {
  // console.log("tabShow");
  const { cartData } = useSelector((state) => state.shopValue);

  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(cartDataAction());
  }, [dispatch]);

  let quantity = (id) => {
    const count = dispatch(returnCount(cartData, id));
    return count;
  };
  return (
    <div
      className='top-profile-maim wow fadeInUp'
      data-wow-delay='0.5s'>
      <div className='container'>
        <div
          id='collapseOne'
          className={
            tabNow ===
              CourseConstant.SUGGEST
              ? "collapse show"
              : "collapse"
          }
          aria-labelledby='headingOne'
          data-parent='#accordion'>
          <SuggestedProduct
            quantity={quantity}
          />
        </div>
        <div
          id='collapseTwo'
          className={
            tabNow ===
              CourseConstant.TOP
              ? "collapse show"
              : "collapse"
          }
          aria-labelledby='headingTwo'
          data-parent='#accordion'>
          <MemoTopRated
            quantity={quantity}
          />
        </div>
        <div
          id='collapseThree'
          className={
            tabNow ===
              CourseConstant.BESTRATED
              ? "collapse show"
              : "collapse"
          }
          aria-labelledby='headingThree'
          data-parent='#accordion'>
          <TopRatedProduct
            quantity={quantity}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductTabs;
