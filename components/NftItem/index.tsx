"use client";
import { Img } from "../Img";
import { MouseEventHandler, useState } from "react";
import Text from "../Text";
import { useDispatch } from "react-redux";
import { setSelectedNft } from "@/features/nftSlice";

interface NftItemsProps {
  title: string;
  image: string;
  price: number;
}

const NftItem = ({ title, image, price }: NftItemsProps) => {

  const dispatch = useDispatch()
  
  const [isHovered, setIsHovered] = useState(false);


  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
   dispatch(setSelectedNft({ image }));
  };

  return (
    <div className="flex flex-col w-[85%] p-4 shadow-[-6px_-6px_20px_4px_rgba(0,0,0,0.1),_6px_6px_20px_4px_rgba(45,78,255,0.15)] rounded-[47px] mx-auto">
      <div className="flex flex-col items-center justify-start w-full mb-[42px] gap-[43px]">
        <div className="flex flex-row justify-center w-full">
          <div className="w-full relative">
            <Img
              src={image}
              alt="night_sky_three"
              className="justify-center h-[227px] w-full sm:w-full  rounded-[34px]  transition-opacity duration-300 hover:opacity-100"
            />
            <div
              className="w-full left-0 bottom-0 right-0 top-0 absolute transition-opacity duration-300 hover:bg-slate-800 hover:bg-opacity-50 rounded-[34px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button
                onClick={handleButtonClick}
                className={`bg-[#FAFAFA] w-max h-[60px] px-12 left-0 bottom-0 right-0 top-0 m-auto font-semibold absolute rounded-[33px] transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                Buy --&gt;
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-[98%] md:w-full">
          <Text className="font-semibold md:text-[1.20rem] max-w-md: text-[1.6rem]">
            {title}
          </Text>
          <button className="px-4 font-medium bg-[#D4D3EB] rounded-[49px] py-3">
            {price} BTC
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftItem;
