import { HomePage } from "@/components/home-page";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white h-screen ">
      <Navbar/>
      <HomePage/>
      
    </main>
  );
}
