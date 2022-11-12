import React, { useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";

const MaterialsTabs = () => {
  const [key, setKey] = useState("Product Information");
  return (
    <>
      <Row>
        <Col>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 nav nav-tabs"
          >
            <Tab
              eventKey="Product Information"
              title="Product Information"
              className="nav-link "
            >
              <div className="tab-content-wrapper">
                <p
                  className="font-18-normal mb-30"
                  style={{ color: "#333333" }}
                >
                  The MPS XCEED Goggles have a patented curved lens for expanded
                  field of vision allows the swimmer to sight walls and the
                  competition without altering head position. Engineered with
                  Exo-Core technology, which combines two materials for maximum
                  performance. Compressed Micro-Gasket made of ultra-soft
                  Softeril and provides a leak resistant seal and a low-profile
                  design. Semi-rigid exoskeleton maximizes the structural
                  strength and stability of the goggle. Hydrodynamic,
                  low-profile head buckle for quick adjustments. High-quality,
                  low-profile silicone strap with textured grip effect. Clear
                  vision is assured with anti-fog treated polycarbonate lenses.
                  Goggles have ergonomic, easy to replace, interchangeable nose
                  bridge for a customizable, comfortable fit. Designed and
                  manufactured in Italy and are FINA approved.
                </p>
                <ul className="font-18-normal">
                  <li>
                    <i className="icofont-caret-right"></i>
                    Asymmetric and anatomically designed lens
                  </li>
                  <li>
                    <i className="icofont-caret-right"></i>
                    Wider field of vision
                  </li>
                  <li>
                    <i className="icofont-caret-right"></i>
                    High performing hydrodynamic shape
                  </li>
                  <li>
                    <i className="icofont-caret-right"></i>
                    Low profile side loops and micro head buckles
                  </li>
                  <li>
                    <i className="icofont-caret-right"></i>
                    Includes 4 nosepiece options for custom fit
                  </li>
                </ul>
              </div>
            </Tab>

            <Tab eventKey=" Product Detail" title="  Product Detail">
              <div className="tab-content-wrapper-second">
                <h4 className="title mb-30">Specification</h4>
                <ul className="top-content mb-30">
                  <li>
                    Lens Material -<span>PC</span>
                  </li>
                  <li>
                    Head Band -<span>Silica gel</span>
                  </li>
                  <li>
                    Fit People -<span>Adult</span>
                  </li>
                  <li>
                    Gender -<span>Unisex</span>
                  </li>
                  <li>
                    Net Weight -<span>145g</span>
                  </li>
                  <li>
                    Size -<span>156.5x39.1cm</span>
                  </li>
                  <li>
                    Function -<span>Waterproof, Anti-fog, UV-proof</span>
                  </li>
                </ul>
              </div>
            </Tab>
            <Tab eventKey=" Product feature" title=" Product feature">
              <div className="tab-content-wrapper-third">
                <h4 className="title mb-30">FINA Approved</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam ducimus cum sunt quas, exercitationem et sit a quos
                  culpa ratione, atque nobis fugiat accusamus dolores
                  perspiciatis facilis blanditiis optio suscipit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam ducimus cum sunt quas, exercitationem et sit a quos
                  culpa ratione, atque nobis fugiat accusamus dolores
                  perspiciatis facilis blanditiis optio suscipit.Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Totam ducimus
                  cum sunt quas, exercitationem et sit a quos culpa ratione,
                  atque nobis fugiat accusamus dolores perspiciatis facilis
                  blanditiis optio suscipit.
                </p>
              </div>
            </Tab>
            <Tab eventKey="  Delivery & Returns" title=" Delivery & Returns">
              <div className="tab-content-wrapper-fourth">
                <h4 className="title mb-30">Delivery & Returns</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam ducimus cum sunt quas, exercitationem et sit a quos
                  culpa ratione, atque nobis fugiat accusamus dolores
                  perspiciatis facilis blanditiis optio suscipit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam ducimus cum sunt quas, exercitationem et sit a quos
                  culpa ratione, atque nobis fugiat accusamus dolores
                  perspiciatis facilis blanditiis optio suscipit.Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Totam ducimus
                  cum sunt quas, exercitationem et sit a quos culpa ratione,
                  atque nobis fugiat accusamus dolores perspiciatis facilis
                  blanditiis optio suscipit.
                </p>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default MaterialsTabs;
