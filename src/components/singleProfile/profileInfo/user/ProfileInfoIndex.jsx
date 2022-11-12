import React from "react";
import { useParams } from "react-router-dom";
import CommonHeaderLayout from "../../../layout/CommonHeaderLayout";

import Index from "../Index";
import Sidebar from "../Sidebar";

export const ProfileInfoIndex = () => {
  let { id } = useParams();

  return (
    <div className="main-body">
      <CommonHeaderLayout name={"Profile update"} />

      <section className="user-setting-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-5">
              <Sidebar id={id} />
            </div>
            <Index />
          </div>
        </div>
      </section>
    </div>
  );
};

export const MemoProfileInfoIndex = React.memo(ProfileInfoIndex);
