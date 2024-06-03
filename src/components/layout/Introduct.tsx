import React from "react";
import Link from "next/link";

function Introduct() {
  return (
    <section className="flex py-10 justify-between px-4">
      <div className="p-3 space-y-4">
        <h2 className="font-semibold text-4xl">
          Bạn Cần Một Server Riêng Cho Mình?
        </h2>
        <p>
          Chỉ với 3.000.000 VNĐ bạn đã có thể có 1 Server riêng cho mình với
          nhiều tiện ích và chức năng hấp dẫn.
        </p>
        <div>
          <Link
            href="/#"
            className="text-white bg-orange-400 hover:bg-blue-600 py-2 px-8 rounded-xl"
          >
            Đặt Hàng
          </Link>
        </div>
      </div>
      <div>
        <video className="h-full w-full rounded-lg" controls>
          <source
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Introduct;
