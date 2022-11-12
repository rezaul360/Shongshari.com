import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProductList } from "../../../redux/actions/shop/ShopAction";

function ProductDetailsHeader() {
  let { id } = useParams();

  const { singleProductData } = useSelector((state) => state.shopValue);
  // console.log("singleProductData header :>> ", singleProductData);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleProductList(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="content">
        <h2 className="title extra-padding">
          {singleProductData?.data?.title}
        </h2>
        <ul className="breadcrumb-list extra-padding">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>{singleProductData?.data?.category}</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetailsHeader;
