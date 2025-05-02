import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { LiaSmsSolid } from "react-icons/lia";
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


const Bottom1 = () => {
  return (
    <div className=" mt-10  ">
      <div className="flex  gap-x-2 p-5 ">
        <div className="w-[30%]  flex flex-col">
          <div className="text-xl ">Contact Information</div>
          <div className="text-sm my-1 ">
            Sector 136Noida - 201301, Uttar Pradesh, India
          </div>
          <div>
            <span className="font-semibold my-1 ">Phone :</span>--9205073393
          </div>
          <div>Richa Bharti (Project Manager)</div>
          <div>
            {" "}
            <span className="font-semibold my-1 ">Mobile :</span>09625612871,
            09205073393, 07518267697
          </div>
          <div className="text-sm my-1  ">
            09315212736, 09058174356, 08802109309, 07669331781
          </div>
          <div className="my-2 ">
            Sector 136, Noida - 201301, Uttar Pradesh, India
          </div>
        </div>
        <div className="w-[23%] flex flex-col">
          <div className="text-xl ">Quick Links</div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className=" text-gray-500" />
            </div>
            <div className="text-sm">Home Page </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm ">Company Profile </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm ">Our Products </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm  ">Contact Us </div>
          </div>
        </div>
        <div className="w-[23%]  lex flex-col">
          <div className="text-xl ">Our Products</div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className=" text-gray-500" />
            </div>
            <div className="text-sm">Third Level </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm ">Indian Tea </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm ">Master Multi Level </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm  ">Steel Pipes </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm  ">Master Multi Level</div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm  ">Steel Pipes </div>
          </div>
        </div>

        <div className="w-[23%]  lex flex-col">
          <div className="text-xl "></div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className=" text-gray-500" />
            </div>
            <div className="text-sm">Blank Category </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm ">Indian Tea </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm ">Master Multi Level </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm  ">Steel Pipes </div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm  ">Master Multi Level</div>
          </div>
          <div className="flex items-center gap-x-3 my-2   ">
            <div>
              <FaArrowRight className="text-sm text-gray-500" />
            </div>
            <div className="text-sm  ">Steel Pipes </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-7 my-4 p-5 ">
        <div
          className="w-[10%] border gap-x-2 flex items-center p-1 rounded-md 
         bg-[#30629E]"
        >
          <div>
            <MdArrowOutward className="text-gray-400" />
          </div>
          <div className="text-white">Send Inquiry</div>
        </div>
        <div
          className="w-[10%] border gap-x-2 flex items-center p-1 rounded-md 
         bg-[#30629E]"
        >
          <div>
            <LiaSmsSolid className="text-gray-400" />
          </div>
          <div className="text-white">SMS</div>
        </div>
        <div
          className="w-[10%] gap-x-2 border flex items-center p-1 rounded-md 
         bg-[#30629E]"
        >
          <div>
            <IoCall className="text-gray-400" />
          </div>
          <div className="text-white">Call Me Free</div>
        </div>
      </div>
      <div className="bg-[#30629E] px-5 justify-between items-center flex h-20">
        <div className="flex items-center pt-2">
          <div>
            <img
              src="	https://tiimg.tistatic.com/catalogs/template156607/icon.png"
              alt=""
            />
          </div>
          <div className="text-xs font-semibold text-white ">
            <div>
              Trade India (SEO DEMO) [150164][Noida](no images) All Rights
              Reserved.(Terms of Use)
            </div>
            <div>Developed and Managed by Infocom Network Private Limited.</div>
          </div>
        </div>
        <div className="bg-white items-center gap-x-2 p-1 h-8  flex rounded-md ">
          <div className="text-sm ">Change Language</div>
          <div><IoIosArrowDown className="mt-1 "/></div>
        </div>
      </div>
    </div>
  );
};

export default Bottom1;
