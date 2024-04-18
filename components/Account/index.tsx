import React from "react";
import Link from "next/link";
import { Img } from "../Img";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setAccount } from "@/features/accountSlice";
import Button from "../Button";

interface AccountProps {
  account: boolean;
  setAccount?: () => void;
}

const Account: React.FC<AccountProps> = () => {

  const { nftImage } = useSelector((state: RootState) => state.nft);
  const { account } = useSelector((state: RootState) => state.account);

  const dispatch = useDispatch();

  const closeAccountPopup = () => {
    dispatch(setAccount(false));
  };
  
  return (
    <div>
      {account && (
        <div
          className={`pt-[16px] pb-[100px] px-[24px] fixed right-0 z-50 top-[10px] bg-[#fff] sm:w-[400px] max-w-sm: w-[250px] popup rounded-[30px] border-2 border-[#02071D] popup ${
            account ? "open" : "closed"
          }`}
        >
          <div className="cursor-pointer" onClick={closeAccountPopup}>
            <Img
              src="/images/vector-to-right.svg"
              className="h-[12px] w-[12px] fixed top-[40px] max-w-sm: right-[250px] sm:right-[400px]"
            />
            <Img
              src="/images/vector-to-right.svg"
              className="h-[12px] w-[12px] fixed top-[40px] max-w-sm: right-[258px] sm:right-[408px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <div className="flex sm:flex-row max-w-sm: flex-col items-center justify-between">
              <div className="flex items-center w-full gap-4">
                <div className="bg-[#29627F] w-[50px] h-[50px] rounded-[50%]"></div>
                <p>STV6Q...4Z7WD</p>
                <Img
                  src="/images/copy.svg"
                  className="h-[20x] w-[20px] cursor-pointer"
                />
              </div>
              <div className="w-[20%]">
                <Img
                  src="/images/sign-in.svg"
                  className="w-[20x] h-[20px] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <p className="mt-8 text-[#7B7B7B] text-[0.8rem]">In your wallet</p>
          <p className="text-[#02071D] font-semibold text-[2.1rem]">
            0.129 BTC
          </p>

          <p className="font-[800] mt-14 ml-6">Your NFTs</p>

          {nftImage.length !== 0 ? (
            <>
              <div className="overflow-y-auto h-[300px] mx-auto px-auto">
                {nftImage &&
                  nftImage.map((item, index) => (
                    <Img
                      src={item.image}
                      alt={`NFT ${index}`}
                      className="sm:ml-6 mt-8 rounded-[34px] sm:w-[300px] max-w-sm: w-[160px] mx-auto h-[200px]"
                    />
                  ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col">
              <p className="text-center my-14 text-[#617587]">
                You don’t own any NFTs yet
              </p>
              <Link className="w-full text-center" href="/collection">
                <Button className="w-[80%] py-4 text-base font-semibold rounded-[33px] text-[#fff] bg-[#23252B] ]">
                  Start shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Account;
