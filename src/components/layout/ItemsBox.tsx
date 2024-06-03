import React from "react";
import { Plan } from "@/app/types/plans";

function ItemsBox({ listOfObjects }: { listOfObjects: Plan[] }) {
  return (
    <div className="flex gap-4 justify-around py-6">
      {listOfObjects.map((object, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-50 border rounded-t-xl px-12 py-2 bg-blue-500 text-white">
            <h3>{object.costnormal}</h3>
            <p>{object.time}</p>
          </div>
          <div className="flex flex-col justify-around w-60 h-40 border rounded-xl p-4">
            <div>
              <p>
                <a className="text-orange-600" href="{object.linkdescription}">
                  Chi tiết về tính năng
                </a>
              </p>
              <p>{object.setupfee}</p>
            </div>
            <div>
              <button className="border hover:bg-blue-600 bg-orange-400 text-white px-6 py-2 rounded-md">
                Đặt Hàng
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsBox;
