'use client'
import HeaderMain from "@/components/Home";
import Collections from "@/components/CollectionSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stripes from "@/components/Stripes";


export default function Home() {

  return (
    <>
      <div className="sm:w-[90%] w-[95%] mx-auto my-6 font-inter" >
        <Header account={false} />
        <Stripes className="mt-[8rem]" />
        <HeaderMain />
        <Collections />
      </div>
      <Footer />
    </>
  );
}
