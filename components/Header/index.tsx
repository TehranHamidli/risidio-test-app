"use client";
import Link from "next/link";
import { Img } from "../Img";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "@/features/accountSlice";
import { RootState } from "@/store/store";
import Account from "../Account";

interface HeaderTypes {
  account: boolean;
}

const Header: React.FC<HeaderTypes> = () => {
  const dispatch = useDispatch();
  const { account } = useSelector((state: RootState) => state.account);

  const handleAccountButtonClick = () => {
    dispatch(setAccount(true));
  };

  return (
    <>
      <div className="flex justify-between items-center sm:px-[5rem] px-6 py-4 fixed top-0 left-0 w-full z-50 bg-white ">
        <Link href="/">
          <Img
            className="h-10 sm:w-[240px] max-w-sm: w-[175px]"
            alt="marketplace"
            src="/images/marketplace.png"
          />
        </Link>
        <div className="flex gap-6 ">
          {/* <Link href="/connect-wallet">
            <Button className="border-gray-900 border font-semibold border-solid text-[#23252B] py-4 px-8 rounded-[87px]">
              Connect Wallet
            </Button>
          </Link> */}
          {account && <Account account={false} />}

          <Button
            onClick={handleAccountButtonClick}
            className="border-gray-900 border font-semibold border-solid text-[#23252B] py-4 px-8 rounded-[87px]"
          >
            Account
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
