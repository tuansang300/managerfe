import Footer from "@/components/layout/Footer";
import InforAnti from "@/components/layout/InforAnti";
import Introduct from "@/components/layout/Introduct";
import ListProduct from "@/components/layout/ListProduct";
import Service from "@/components/layout/Service";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <Introduct />
        <ListProduct />
        <InforAnti />
        <Service />
      </div>
    </div>
  );
}
