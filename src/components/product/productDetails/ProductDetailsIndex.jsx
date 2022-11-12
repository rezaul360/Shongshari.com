import Wave from "../../layout/Wave";
import ProductDetailsBody from "./ProductDetailsBody";
import ProductDetailsHeader from "./ProductDetailsHeader";

function ProductDetailsIndex() {
    return (
        <>
            <section className='breadcrumb-area profile-bc-area'>
                <Wave />
                <ProductDetailsHeader />
            </section>
            <ProductDetailsBody />
        </>
    );
}

export default ProductDetailsIndex;
