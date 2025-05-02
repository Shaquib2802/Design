import React, { useRef, useState } from "react";

const Card7 = () => {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative "
      >
        <div className=" bg-white  p-2 rounded-md hover:shadow-xl relative">
          <img
            className="border  border-gray-200 w-full h-[62vh]"
            src="https://tiimg.tistatic.com/new_website1/my_trade_india/new_templates/big/th_template_150567.jpg?0.48212635046513"
            alt="template"
          />

          {open && (
            <div className="absolute left-0 rounded-md bottom-0 h-[50%] w-full bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end pb-4 items-center transition-opacity duration-100">
              <div className="flex items-center gap-x-2 text-white px-4 py-2 rounded-md shadow-md">
                <div>Template ID:</div>
                <div className=" font-semibold">
                  156607 <span className="text-red-500">(5)</span>
                </div>
                <div className="border rounded-md p-1 cursor-pointer hover:bg-gray-100">
                  Preview
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card7;
