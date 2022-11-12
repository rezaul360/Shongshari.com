import CommonHeaderLayout from "../../layout/CommonHeaderLayout";
import SearchedMembersBody from "./SearchedMembersBody";

function SearchedMembersIndex() {
  return (
    <div className="main-body">
      <CommonHeaderLayout name={"Members"} />
      {/* <PartnerPageBody /> */}
      <SearchedMembersBody />
    </div>
  );
}

export default SearchedMembersIndex;
