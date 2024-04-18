import Text from "../Text";
import { Img } from "../Img";
import Button from "../Button";

  const CollectionMain = () => {

  return (
    <div className="flex gap-12 md:flex-row max-w-md: flex-col items-center justify-between w-full rounded-[30px] my-12 py-10 px-14">
      <div className="md:w-[50%] max-w-md: w-full flex flex-col">
        <Button className="bg-[#FADFE4] text-gray-900 rounded-[49px] font-medium w-[150px] py-4">
          Trending now
        </Button>

        <Text className="mt-[38px] text-[1.5rem] text-[#617587] font-inter">
          Collection
        </Text>

        <Text  className=" w-full text-[4rem] font-bold">
          Night Sky
        </Text>

        <Text className="leading-8 mt-4">
          Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod
          tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do
          eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit,
          sed do eiusmod tempo
        </Text>

        <div className="flex items-center gap-4 my-4">
          <Img
            src="/images/user-icon.png"
            alt="circleimage"
            className="h-[68px] w-[68px]"
          />

          <div>
            <Text className="text-[#617587]">
              Artist
            </Text>
            <Text  className="!text-gray-900">
              Léa Jacquot
            </Text>
          </div>
        </div>
      </div>

      <div>
        <Img
          src="/images/stars-nft.png"
          alt="image_one"
          className=" rounded-[52px] object-cover  w-full    "
        />
      </div>
    </div>
  );
};

export default CollectionMain;
