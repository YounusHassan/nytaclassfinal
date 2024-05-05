import CharimanImg from "../img/img.jpg";
import React from "react";

function ChairmanImgage() {
  return (
    <div>
      {/* img div */}
      <div>
        <img src={CharimanImg} alt="" />
        <div>
          <p>Mr. S M Nurun Nabi</p>

          <p>Chairman</p>
        </div>
      </div>
    </div>
  );
}

export default ChairmanImgage;
