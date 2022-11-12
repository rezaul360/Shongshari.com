import { useReducer } from "react";
import CommonHeaderLayout from "../../layout/CommonHeaderLayout";
import ProductConstant from "./Constants";
import FilterProduct from "./FilterProduct";
import ProductTabs from "./ProductTabs";

function ProductPageIndex() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      tabNow: ProductConstant.SUGGEST,
    }
  );

  let changeTab = (tab) => {
    setState({ tabNow: tab });
  };
  // console.log("state.tabNow :>> ", state.tabNow);
  return (
    <>
      <div className="main-body">
        <CommonHeaderLayout name={"Products"} />
        <section className="findPartner banner-section">
          <div className="container">
            <div className="row">
              <FilterProduct />
              <div className="col-lg-9">
                <section className="top-slider-section">
                  <div id="accordion">
                    <div className="container sr__proBottom wow fadeInUp">
                      <div
                        id="topProfile__space"
                        className="top-profile-tab d-flex justify-content-between"
                      >
                        <button
                          onClick={() => changeTab(ProductConstant.SUGGEST)}
                          className={
                            state.tabNow === ProductConstant.SUGGEST
                              ? "btn activition"
                              : "btn"
                          }
                        >
                          <p className="tp__o">Suggested For You</p>
                        </button>
                        <button
                          id="headingTwo"
                          className={
                            state.tabNow === ProductConstant.TOP
                              ? "btn activition"
                              : "btn"
                          }
                          onClick={() => changeTab(ProductConstant.TOP)}
                        >
                          <p className="tp__o">Top</p>
                        </button>
                        <button
                          id="headingThree"
                          className={
                            state.tabNow === ProductConstant.BESTRATED
                              ? "btn activition"
                              : "btn"
                          }
                          onClick={() => changeTab(ProductConstant.BESTRATED)}
                        >
                          <p className="tp__o">Best Rated</p>
                        </button>
                      </div>
                    </div>
                    <ProductTabs tabNow={state.tabNow} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductPageIndex;
