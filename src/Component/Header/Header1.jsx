import React from "react";
import Body3 from "../Body/Body3";
import Bottom1 from "../Footer/Bottom1";

const Header1 = () => {
  return (
    <div>
      <div className="h-8 border text-center">
        <span className="font-semibold">Template Id </span> : 156607{" "}
        <span className="font-semibold">Theme Id</span> : 156607
      </div>
      <div className="h-20 shadow-lg   flex justify-between items-center px-8 py-2">
        <div className="flex items-center    ">
          <div>
            <img
              src="https://tiimg.tistatic.com/images/l/1/logo_150164.png"
              alt=""
            />
          </div>
          <div className="text-2xl ">SEO DEMO</div>
        </div>
        <div className="rounded-md bg-[#30629E] text-white p-2">Send Email</div>
      </div>
      <Body3/>
      <Bottom1/>
    </div>
  );
};

export default Header1;
