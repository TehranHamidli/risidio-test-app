import React from "react";
import { Img } from "../Img";
import Link from "next/link";


export default function Footer() {
  return (
      <footer className="w-full bg-[#E6E9F2]">
        <div className="mx-auto w-[95%] flex sm:flex-row max-w-sm: flex-col gap-6 justify-between items-center py-8">
      <Link href='/'>
      <Img className="h-10 sm:w-[240px] max-w-sm: w-[175px]" alt='marketplace' src='/images/marketplace.png' />
      </Link>
        <div className="flex gap-10 flex-row items-center justify-center w-[13rem]">
          <div className="cursor-pointer">
              <Img src="/images/img_facebook.svg" alt="facebook_one" className="md:h-[24px] max-w-md: h-[18px]" />
            </div>
            <div className="cursor-pointer">
              <Img src="/images/img_twitter.svg" alt="twitter_one" className="h-[24px]" />
            </div>
            <div className="cursor-pointer">
              <Img src="/images/img_discord.svg" alt="discord_one" className="h-[24px]" />
            </div>
            <div className="cursor-pointer">
              <Img src="/images/img_instagram.svg" alt="instagram_one" className="h-[24px]" />
            </div>
          </div>
        </div>
      </footer>
  );
}
