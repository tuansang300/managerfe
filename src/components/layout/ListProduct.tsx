import React from "react";
import { Plan } from "@/app/types/plans";
import ItemsBox from "./ItemsBox";

const listOfObjects: Plan[] = [
  {
    costnormal: "3.000.000 VNĐ",
    time: "1 Month",
    linkdescription: "No discount",
    setupfee: "Miễn Phí Cái Đặt",
  },
  {
    costnormal: "5.000.000 VNĐ",
    time: "1 Month",
    linkdescription: "10% off",
    setupfee: "Miễn Phí Cái Đặt",
  },
  {
    costnormal: "10.000.000 VNĐ",
    time: "1 Month",
    linkdescription: "15% off",
    setupfee: "Miễn Phí Cái Đặt",
  },
  {
    costnormal: "15.000.000 VNĐ",
    time: "1 Month",
    linkdescription: "20% off",
    setupfee: "Miễn Phí Cái Đặt",
  },
];

const ListProduct = () => {
  return (
    <div className="items-center justify-center py-5">
      <div className="text-center">
        <h2 className="font-semibold text-2xl">
          Các Gói Dịch Vụ Của Chúng Tôi
        </h2>
        <p>Chúng tôi cung cấp các gói hàng tháng hoặc cùng đầu tư.</p>
      </div>
      <div>
        <ItemsBox listOfObjects={listOfObjects} />
      </div>
    </div>
  );
};

export default ListProduct;
