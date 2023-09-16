import React from "react";
import "./index.css";
import img from "../src/ruban.jpg";

function Avatar() {
  return (
    <div>
      <img src={img} className="circle-img" alt="ben" />
    </div>
  );
}
export default Avatar;
