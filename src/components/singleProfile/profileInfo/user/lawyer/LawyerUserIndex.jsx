import { useSelector } from "react-redux";
import LawyerComponents from "./LawyerComponents";
import LawyerFavourite from "./LawyerFavourite";
import { MemoLawyerList } from "./LawyerList";
import { MemoMyHiredLawyersList } from "./MyHiredLawyers";
import { MemoRatedLawyerList } from "./RatedAgentList";
import { MemoSuggestedLawyerList } from "./SuggestedLawyer";
import { MemoTopLawyerList } from "./TopLawyerList";
function LawyerUserIndex() {
  const { lawyerComponentNow } = useSelector((state) => state.LawyerValue);
  let moduleNow = "";
  if (lawyerComponentNow === "componentLawyer") {
    moduleNow = <LawyerComponents />;
  } else if (lawyerComponentNow === "lawyerList") {
    moduleNow = <MemoLawyerList />;
  } else if (lawyerComponentNow === "toplawyerList") {
    moduleNow = <MemoTopLawyerList />;
  } else if (lawyerComponentNow === "suggestedlawyerList") {
    moduleNow = <MemoSuggestedLawyerList />;
  } else if (lawyerComponentNow === "ratedlawyerList") {
    moduleNow = <MemoRatedLawyerList />;
  } else if (lawyerComponentNow === "myHiredlawyerList") {
    moduleNow = <MemoMyHiredLawyersList />;
  }
  else if (lawyerComponentNow === "myLawyerFavourite") {
    moduleNow = <LawyerFavourite />;
  }
  return moduleNow;
}

export default LawyerUserIndex;
