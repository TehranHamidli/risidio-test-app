'use client'
import Link from "next/link";
import { Img } from "../Img"
import Text from "../Text"
import { useState } from "react";
import Button from "../Button";


interface CollectionCardTypes {
    collectionImage: string;
    header: string;
    artistName: string;
    artistIcon: string; 
    key: number;
  }

const CollectionCard = ({collectionImage, header, artistName, artistIcon}: CollectionCardTypes) => {
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    
          <div className="flex flex-col items-center justify-center p-4 shadow-[-6px_-6px_20px_4px_rgba(0,0,0,0.1),_6px_6px_20px_4px_rgba(45,78,255,0.15)]  bg-[#fff] rounded-[47px] w-full ">
            <div className="h-[227px] w-full relative">
            <div className="w-full relative">
                <Img
                    src={collectionImage}
                    alt="night_sky_three"
                    className="justify-center h-[227px] w-full sm:w-full  rounded-[34px]  transition-opacity duration-300 hover:opacity-100"
                />
                   <div
                  className="w-full left-0 bottom-0 right-0 top-0 absolute transition-opacity duration-300 hover:bg-slate-800 hover:bg-opacity-50 rounded-[34px]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Link href="/collection">
                    <Button
                      className={`bg-[#FAFAFA] w-max h-[60px] px-12 left-0 bottom-0 right-0 top-0 m-auto font-semibold absolute rounded-[33px] transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Go to collection --&gt;
                    </Button>
                  </Link>
                </div>
            </div>
            </div>
            <div className="flex flex-row justify-center w-[95%] md:w-full mb-[15px]">
              <div className="w-full">
                <div className="flex flex-row justify-between gap-2 items-center mt-8 w-full">
                  <Text className="mt-[5px] font-bold text-xl">
                    {header}
                  </Text>
                  <Button 
                  className="px-8 py-2 font-medium bg-[#E1EDD9] rounded-[49px]">
                    120 NTF
                  </Button>
                </div>
                
                <Text  className="mt-7 text-[#617587]" >

                  Price Range : 0.12BTC - 0.18BTC
                </Text>
                
                <Text className="!text-gray-900 !leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...
                </Text>
                <div className="flex flex-row justify-start items-center w-[41%] md:w-full mt-[33px] gap-[17px]">
                  <Img
                    src={artistIcon}
                    alt="circleimage"
                    className="h-[40px] w-[40px] md:h-auto rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-start w-[62%]">
                    <Text  className="text-[#617587]">
                      Artist
                    </Text>
                    <Text  className="!text-gray-900">
                      {artistName}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
  
}

export default CollectionCard