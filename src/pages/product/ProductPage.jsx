import { useSelector } from "react-redux";
import MainLayout from "../../components/layout/MainLayout";
import ProductPageIndex from "../../components/product/productPage/ProductPageIndex";

function ProductPage() {
  const { currentUser } = useSelector((state) => state.authValue);
  // console.log("currentUser", currentUser);
  return (
    <MainLayout>
      <ProductPageIndex />
    </MainLayout>
  );
}

export default ProductPage;
