import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Wallet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <section className="bg-[#E6E9F2] h-[100vh]">
        <div className="w-[90%] mx-auto mb-6 pt-6 font-inter">
          <Header account={false} />
        </div>
            {children}
        </section>
    </html>
  );
}