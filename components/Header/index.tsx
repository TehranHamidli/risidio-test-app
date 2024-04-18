'use client'

import React, { useState } from "react";
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

const Header: React.FC<HeaderTypes> = ({ account }) => {
  const dispatch = useDispatch();
  const [showAccount, setShowAccount] = useState(false);

  const handleAccountButtonClick = () => {
    setShowAccount(!showAccount);
    dispatch(setAccount(!showAccount)); 
  };

  const handleOutsideClick = () => {
    if (showAccount) {
      setShowAccount(false);
      dispatch(setAccount(false)); 
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center sm:px-[5rem] px-6 py-4 fixed top-0 left-0 w-full z-50 bg-white ">
        <Link href="/">
          <Img
            className="h-10 sm:w-[240px] max-w-sm: w-[175px]"
            alt="marketplace"
            src="/images/marketplace.png"
          />
        </Link>
        <div className="flex gap-6">
          <Button
            onClick={handleAccountButtonClick}
            className="border-gray-900 border font-semibold border-solid text-[#23252B] py-4 px-8 rounded-[87px]"
          >
            Account
          </Button>
        </div>
      </div>
      {showAccount && <div className="absolute top-full left-0 z-1  border border-gray-300 "> {/* Account bileşeni burada gösterilecek */}
        <Account account={false} />
      </div>}
      {showAccount && <div className="fixed inset-0 z-30 " onClick={handleOutsideClick}></div>} {/* Dışarıya tıklandığında Account bileşeninin kapanması */}
    </div>
  );
};

export default Header;
