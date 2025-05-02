import React from "react";
import BCard1 from "./CardBody/BCard1";
import Card1 from "./Card/Card1";
import BCard2 from "./CardBody/BCard2";

const Body2 = () => {
  return (
    <div className="p-12 bg-gradient-to-r from-[#FAE7E7] to-[#E5EBF8]">
      <div className="flex justify-around">
        <div>
          <BCard1 />
        </div>
        <div>
          <BCard2 />
        </div>
      </div>
    </div>
  );
};

export default Body2;
