import Image from "next/image";
import NavBar from "@/components/navbar/NavBar";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to AI Solutions</h1>
      </div>
    </div>
  );
}
