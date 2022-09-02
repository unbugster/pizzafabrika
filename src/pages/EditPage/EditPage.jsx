import React from "react";
import { EditForm } from "../../components/EditForm";
import "./EditPage.scss";

const EditPage = () => {
  return (
    <div className="EditPage section columns is-flex is-justify-content-center is-align-items-center">
      <div className="EditPage-EditForm column is-full-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen">
        <EditForm formType={"edit"} />
      </div>
    </div>
  );
};

export { EditPage };
