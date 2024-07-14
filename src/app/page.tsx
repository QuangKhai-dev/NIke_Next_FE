import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ShopByCategory from "@/components/ShopByCategory";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <Feature />
        <ShopByCategory />
      </main>
    </>
  );
}
