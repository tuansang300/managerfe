import AppBar from "@/components/AppBar";
import "./globals.css";
import Providers from "@/components/Providers";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "NDSGame - Trang Chủ",
  description: "Giải pháp quản lý và thiết kế Server",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar />
          {props.children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
