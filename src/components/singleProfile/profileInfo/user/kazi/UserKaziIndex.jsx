
import React from 'react';
import { useSelector } from 'react-redux';
import KaziComponets from './KaziComponets';
import KaziList from './KaziList';
import MyHire from './MyHire';
import RatedKaziList from './RatedKaziList';
import SuggestKaziList from './SuggestKaziList';
import TopKaziList from './TopKaziList';



function UserKaziIndex() {
  const { kaziComponentNow } = useSelector((state) => state.kaziValue);
  let moduleNow = "";
  if (kaziComponentNow === "componentKazi") {
    moduleNow = <KaziComponets />;
  } else if (kaziComponentNow === "KaziList") {
    moduleNow = <KaziList />;
  }
  else if (kaziComponentNow === "TopKaziList") {
    moduleNow = <TopKaziList />;
  }
  else if (kaziComponentNow === "SuggestedKaziList") {
    moduleNow = <SuggestKaziList />;
  }
  else if (kaziComponentNow === "RatedKaziList") {
    moduleNow = <RatedKaziList />;
  }
  else if (kaziComponentNow === "MyHiredKaziList") {
    moduleNow = <MyHire />;
  }
  return moduleNow;
}


export default UserKaziIndex;
