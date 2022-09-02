import React from "react";
import { EditForm } from "../../components/EditForm";
import "./AddPage.scss";

const AddPage = () => {
  return (
    <div className="AddPage section columns is-flex is-justify-content-center is-align-items-center">
      <div className="AddPage-EditForm column is-full-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen">
        <EditForm formType={"add"} />
      </div>
    </div>
  );
};

export { AddPage };
