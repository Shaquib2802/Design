import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-100 h-20">
      <div className="flex px-14 py-3 justify-between">
        <div>
          <img
            className="w-20"
            src="https://www.tradeindia.com/images/icons/logoVector.svg"
            alt=""
          />
        </div>
        <div className="flex text-lg items-center gap-x-3 ">
          <div>Login</div>
          <div className="border px-2 py-1 rounded-md text-white  bg-[#1D678D] ">
            Signup
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
