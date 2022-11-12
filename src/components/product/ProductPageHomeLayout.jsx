import React from "react";
import ProductsHeader from "./ProductsHeader";
function ProductPageHomeLayout({ children }) {
  return (
    <section className="home2-sucess-stories-section">
      <ProductsHeader />

      {children}
    </section>
  );
}

export default ProductPageHomeLayout;
