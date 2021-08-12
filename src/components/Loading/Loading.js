import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div style={{ marginLeft: "48%" }}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
