import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="items-center justify-center py-10">
      <div className="text-center">
        <h2 className="font-semibold text-2xl">
          Mọi thứ bạn cần đều có ở chúng tôi
        </h2>
        <p>
          Tư tư vấn đề hỗ trợ trong quá trình vận hành game. Cũng như cung cấp
          các giải pháp theo yêu cầu với giá thành rất thấp.
        </p>
      </div>
      <div className="flex gap-5 pt-10">
        <div className="flex flex-col p-6 items-center text-center border rounded-xl">
          <Image src="/6.png" alt="Support" width={100} height={100} />
          <h2 className="pt-8 pb-3 font-semibold">12/6 Hỗ trợ</h2>
          <p>
            Nếu bạn cần hỗ trợ hoặc giải đáp thắc mắc, chúng tôi sẽ luôn ở đây
          </p>
        </div>
        <div className="flex flex-col p-6 items-center text-center border rounded-xl">
          <Image src="/7.png" alt="Support" width={100} height={100} />
          <h2 className="pt-8 pb-3 font-semibold">Xử lý yêu cầu</h2>
          <p>Nhận yêu cầu và giải quyết yêu cầu trong thời gian sớm nhất.</p>
        </div>
        <div className="flex flex-col p-6 items-center text-center border rounded-xl">
          <Image src="/8.png" alt="Support" width={100} height={100} />
          <h2 className="pt-8 pb-3 font-semibold">Chuyển đổi máy chủ</h2>
          <p>Hỗ trợ chuyển đổi từ Server này sang Server khác.</p>
        </div>
        <div className="flex flex-col p-6 items-center text-center border rounded-xl">
          <Image src="/4.png" alt="Support" width={100} height={100} />
          <h2 className="pt-8 pb-3 font-semibold">Cập nhật thường xuyên</h2>
          <p>
            Chúng tôi luôn cập nhật các thông tin mới và đưa ra các bản vá
            thường xuyên để xử lý các lỗi trong Game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
