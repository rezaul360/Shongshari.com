import membershipService from "../../api/MembershipService";
import MainLayout from "../../components/layout/MainLayout";
import MemberShipPageIndex from "../../components/membership/memberShipPage/MemberShipPageIndex";

function MembershipPage() {
  return (
    <>
      <MainLayout>
        <MemberShipPageIndex />
      </MainLayout>
    </>
  );
}

export default MembershipPage;
