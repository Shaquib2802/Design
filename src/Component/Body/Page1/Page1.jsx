import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import Body2 from "../Body2";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white  border ">
        <div className=" flex justify-between h-20 w-[60%] px-5    items-center">
          <div onClick={() => navigate("/")}>
            <IoMdArrowBack className="!font-bold cursor-pointer  text-2xl " />
          </div>
          <div className="font-bold  text-2xl ">
            Template ID : <span className="text-red-500">156607</span>
          </div>
        </div>
      </div>
      <Body2 />
    </div>
  );
};

export default Page1;
