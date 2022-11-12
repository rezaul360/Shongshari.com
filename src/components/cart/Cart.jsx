import CommonHeaderLayout from "../layout/CommonHeaderLayout";
import CartBody from "./CartBody";

const Cart = () => {
  return (
    <>
      <CommonHeaderLayout name={"Cart"} />
      <div className="main-body product-details-section">
        <div className="container">
          <CartBody />
        </div>
      </div>
    </>
  );
};

export default Cart;
