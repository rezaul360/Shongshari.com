import BostSection from "../membershipDetails/BostSection";
import FAQ from "../membershipDetails/FAQ";
import HostingBenefits from "../membershipDetails/HostingBenefits";
import { MemberShipPackageMemo } from "../membershipDetails/MemberShipPackage";

import UpgradePlane from "../membershipDetails/UpgradePlane";

function MembershipBody() {
  return (
    <section className="membership-section">
      <div className="container">
        <UpgradePlane />
        <MemberShipPackageMemo />
      </div>
      <div className="pricing-plans">
        <img className="shape1" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="contact-link">
                If you have any questions <a href="contact.php">Contact Us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <HostingBenefits />
      <BostSection />
      <FAQ />
    </section>
  );
}

export default MembershipBody;
