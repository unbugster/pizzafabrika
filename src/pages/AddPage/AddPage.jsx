import React from "react";
import { EditForm } from "../../components/EditForm";

const AddPage = () => {
  return (
    <div className="AddPage">
      <EditForm formType={"add"} />
    </div>
  );
};

export { AddPage };
