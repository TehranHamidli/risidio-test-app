import React from "react";
import Text from "../Text";
import { Img } from "../Img";
import Link from "next/link";
import Button from "../Button";

const Home = () => {
  return (
    <div className="flex gap-12 md:flex-row flex-col items-center justify-between w-full bg-[rgb(230,233,242)]  rounded-[30px] my-4 py-10 sm:px-14 px-8">
      <div className="md:w-[50%]  w-full flex flex-col">
        <Button className="bg-[#FADFE4] text-gray-900 rounded-[49px] font-medium w-[150px] py-4">
          Trending now
        </Button>

        <Text className="mt-[38px] text-[1.5rem] text-[#617587] font-inter">
          Night sky collection
        </Text>
        <Text  className="w-full text-[3.5rem] mt-6 font-bold">
          With the stars
        </Text>

        <div className="flex items-center gap-4 mt-10">
          <Img
            src="/images/user-icon.png"
            alt="circleimage"
            className="h-[68px] w-[68px]"
          />

          <div>
            <Text  className="text-[#617587]">
              Artist
            </Text>
            <Text className="!text-gray-900">
              Léa Jacquot
            </Text>
          </div>
        </div>

        <div className="md:w-[75%] item-center flex justify-between mt-8 gap-4 max-w-[500px]">
          <div className="w-[220px]">
            <Link className="w-full" href="/connect-wallet">
              <Button className="w-full py-4 text-base font-semibold rounded-[33px] text-[#fff] bg-[#23252B] ]">
                Buy
              </Button>
            </Link>
          </div>
          <div className="w-[220px]">
            <Link className="w-full" href="/collection">
              <Button className="w-full  py-4 text-base font-semibold rounded-[33px] text-[#000] bg-[#E6E9F2] border-2 border-[#000]">
                See collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Img
        src="/images/stars-nft.png"
        alt="image_one"
        className=" rounded-[52px] md:w-[40%] w-full  md:h-[35%] "
      />
    </div>
  );
};

export default Home;
