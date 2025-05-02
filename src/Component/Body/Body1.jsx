import React, { useRef, useState } from "react";
import Card1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import Card3 from "./Card/Card3";
import Card4 from "./Card/Card4";
import Card5 from "./Card/Card5";
import Card6 from "./Card/Card6";
import Card7 from "./Card/Card7";
import Card8 from "./Card/Card8";
import Card9 from "./Card/Card9";
import Card10 from "./Card/Card10";
import Card11 from "./Card/Card11";

const Body1 = () => {
  return (
    <div className="p-12 bg-gradient-to-r from-[#FAE7E7] to-[#E5EBF8]">
      <div className="font-medium text-3xl text-gray-700">
        Sell everywhere with TradeIndia Website
      </div>
      <div className="my-1">
        Discover our most popular themes. Website templates and get started with
        the TradeIndia website builder.
      </div>

      <div className="grid grid-cols-4 my-8 gap-5">
        <div className="">
          <Card1 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card3 />
        </div>
        <div>
          <Card4 />
        </div>
        <div>
          <Card5 />
        </div>
        <div>
          <Card6 />
        </div>
        <div>
          <Card7 />
        </div>
        <div>
          <Card8 />
        </div>
      </div>
      <div className="flex w-[100%] justify-around   ">
        <div className="w-[25%]">
          <Card9 />
        </div>
        <div className="w-[25%]">
          <Card10 />
        </div>
        <div className="w-[25%]">
          <Card11 />
        </div>
      </div>
    </div>
  );
};

export default Body1;
