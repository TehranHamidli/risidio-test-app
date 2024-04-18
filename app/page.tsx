
import HeaderMain from "@/components/HomeMain";
import Collections from "@/components/Collections";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stripes from "@/components/Stripes";

export default function Home() {
  return (
    <>
      <div className="sm:w-[90%] w-[95%] mx-auto my-6 font-inter">
        <Header account={false} />
        <Stripes className="mt-[5rem]" />
        <HeaderMain />
        <Collections />
      </div>
      <Footer />
    </>
  );
}
