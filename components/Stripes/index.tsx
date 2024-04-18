import React from "react";
interface StripesTypes {
  className: string;
}

const Stripes: React.FC<StripesTypes> = ({ className }) => {
  return (
    <>
      <div className={`flex justify-center mx-auto gap-6  w-[95%] ${className}`  }>
        <div className="w-[15%] h-3 bg-[#23252B] rounded-xl"></div>
        <div className="w-[15%] h-3 bg-[#E6E9F2] rounded-xl">
          <div className="w-[25%] h-3 bg-[#23252B] rounded-xl"></div>
        </div>
        <div className="w-[15%] h-3 bg-[#E6E9F2] rounded-xl"></div>
        <div className="w-[15%] h-3 bg-[#E6E9F2] rounded-xl"></div>
        <div className="w-[15%] h-3 bg-[#E6E9F2] rounded-xl"></div>
        <div className="w-[15%] h-3 bg-[#E6E9F2] rounded-xl"></div>
      </div>
    </>
  );
};

export default Stripes;
