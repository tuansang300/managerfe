import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="flex p-5 justify-around bg-yellow-700 mt-12">
        <div className="text-white">
          <h2 className="text-2xl font-semibold">
            Bạn muốn trở thành nhà bán lẻ?
          </h2>
          <p>
            Hãy liên hệ với chúng tôi để nhận các ưu đãi dành riêng cho nhà bản
            lẻ.
          </p>
        </div>
        <div className="pt-3">
          <a
            href="https://www.facebook.com/tuansang1706"
            target="_blank"
            rel="noreferrer"
            className="text-white px-4 py-2 rounded-xl border hover:bg-white hover:text-black"
          >
            Liên hệ
          </a>
        </div>
      </div>
      <div className="flex gap-5 p-8 mt-8 justify-around border-b border-gray-600">
        <Image
          src="/us_LoadingBG_map_ox.jpg"
          alt="Support"
          width={120}
          height={80}
        />
        <Image
          src="/us_LoadingBG_map_Paewangdong.jpg"
          alt="Support"
          width={120}
          height={80}
        />
        <Image
          src="/us_LoadingBG_map_Round_boss.jpg"
          alt="Support"
          width={120}
          height={80}
        />
        <Image
          src="/us_LoadingBG_map_seojang.jpg"
          alt="Support"
          width={120}
          height={80}
        />
        <Image
          src="/us_LoadingBG_map_seojang_Boss01.jpg"
          alt="Support"
          width={120}
          height={80}
        />
        <Image
          src="/us_LoadingBG_map_seojang_Boss02.jpg"
          alt="Support"
          width={120}
          height={80}
        />
        <Image
          src="/us_LoadingBG_map_seokgaja.jpg"
          alt="Support"
          width={120}
          height={80}
        />
      </div>
      <div className="flex gap-6 p-4 mt-4">
        <div>
          <h2>Email</h2>
          <ul className="pt-4">
            <li>tuansang314@gmail.com</li>
          </ul>
        </div>
        <div>
          <h2>Mạng Xã Hội</h2>
          <ul className="pt-4">
            <li>
              <a href="https://www.facebook.com/tuansang1706">Facebook</a>
            </li>
            <li>Telegram: @hideout93</li>
          </ul>
        </div>
      </div>
      <div className="bg-sky-400 p-4 text-center">
        <h2>NDSGame © 2024 All rights</h2>
      </div>
    </div>
  );
};

export default Footer;
