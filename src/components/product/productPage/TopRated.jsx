/** @format */

import React, { useMemo, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { minus, plus, topProductList } from "../../../redux/actions/shop/ShopAction";
export const TopRated = ({ quantity }) => {
  const { topProductsData } = useSelector((state) => state.shopValue);
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      productCount: 1,
      indexNow: 0,
      nowCount: {},
    }
  );
  // console.log("tabShow");

  // console.log("topProductsData :>> ", topProductsData);

  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(topProductList());
  }, [dispatch]);
  let courses = "";

  if (topProductsData?.data?.data?.length > 0) {
    courses = topProductsData?.data?.data.map(
      (course, index) => (
        <div
          className='col-xl-4 col-md-6 mb-2 px-2'
          key={`${index}`}>
          <div className='single-product'>
            <div className='img shp__img'>
              <img
                src={
                  course.image_one
                }
                alt='img'
              />
              <span className='sale'>
                {
                  course.percentage
                }
                %
                Sale
              </span>
              <ul className='more-links'>
                <li>
                  <a href='#'>
                    <i className='fas fa-cart-plus'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fas fa-heart'></i>
                  </a>
                </li>
                <li>
                  <a href='product-details.php'>
                    <i className='far fa-eye'></i>
                  </a>
                </li>
                <li>
                  <a href='product-details.php'>
                    <i className='fas fa-exchange-alt'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='content'>
              <div className='price'>
                <span>
                  $
                  {course.price -
                    (course.percentage /
                      100) *
                    course.price}
                </span>
                <span>
                  <del>
                    $
                    {
                      course.price
                    }
                  </del>
                </span>
              </div>
              <h4 className='title text-left'>
                {
                  course.title
                }
              </h4>
              <p className='o__procard text-left'>
                by:{" "}
                {
                  course.category
                }
              </p>
              <div className='review-area'>
                <div className='stars'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
                <span className='separator'>
                  |
                </span>
                <span className='review-content'>
                  229
                  review
                </span>
              </div>
              <div className='input-counter0'>
                <div className='qtySelector text-center'>
                  <i
                    className='fas fa-minus decreaseQty'
                    onClick={() => dispatch(minus(course?.id))}></i>
                  <input
                    type='text'
                    className='qtyValue'
                    id='qtyValue'
                    min=''
                    value={quantity(course?.id)}
                  />
                  <i
                    className='fas fa-plus increaseQty'
                    onClick={() => dispatch(plus(course?.id))}></i>
                </div>
              </div>
              <Link
                to={`/shop/${course.id}`}>
                <a className='hover-effect'>
                  <span className='font-16-semibold'>
                    Buy
                    Now
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )
    );
  }
  return (
    <div className='top-div text-center'>
      <div className='row'>{courses}</div>
    </div>
  );
};

export const MemoTopRated = React.memo(TopRated);
