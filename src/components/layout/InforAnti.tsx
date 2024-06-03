import React from "react";

const InforAnti = () => {
  return (
    <div>
      <div className="flex border p-5 items-center text-center justify-around">
        <h2>PS GAMEGUARD</h2>
        <h2>LIVE GUARD</h2>
      </div>
      <div className="flex gap-2 pt-4">
        <div className="w-2/4">
          <video className="rounded-lg" controls>
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="py-4 px-4">
          <div className="border-b-2 pb-2">
            <h2 className="font-semibold text-3xl pb-2">
              Hỗ trợ các giải pháp về bảo mật!
            </h2>
            <p>
              Với nhiều năm kinh nghiệp. Chúng tôi sẽ tư vẫn và hỗ trợ cài đặt
              Anti
            </p>
          </div>
          <ul className="flex flex-col gap-5 pt-6">
            <li>
              <div>
                <h2 className="text-red-600 both font-bold">Mã Hóa File</h2>
                <p className="text-sm">
                  Bảo vệ các files cần thiết trong Client.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h2 className="text-red-600 font-bold">Bảo vệ Client</h2>
                <p className="text-sm">
                  Chống thay đổi thông tin trong Client qua từng phiên bản
                </p>
              </div>
            </li>
            <li>
              <div>
                <h2 className="text-red-600 font-bold">Giải pháp</h2>
                <p className="text-sm">
                  Hỗ trợ và xử lý các vấn đề về bảo mật khi tìm thấy
                </p>
              </div>
            </li>
            <li>
              <div>
                <h2 className="text-red-600 font-bold">Tư Vẫn</h2>
                <p className="text-sm">
                  Đưa ra các giải pháp tốt nhất cho khách hàng về bảo mật
                </p>
              </div>
            </li>
            <li>
              <div>
                <h2 className="text-red-600 font-bold">Hỗ trợ</h2>
                <p className="text-sm">
                  Luôn hỗ trợ khách hàng trong quá trình sử dụng Anti
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InforAnti;
