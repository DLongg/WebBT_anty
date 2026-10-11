import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://btdecom.vn"),
  title: "BT DECOM | Xây lắp chuyên nghiệp - Phát triển bền vững",
  description: "Công ty TNHH Xây lắp và Phát triển Thương mại BT (BT DECOM). Chuyên thi công đường dây, trạm biến áp, hệ thống cơ điện M&E, chiếu sáng, PCCC và cấp thoát nước.",
  keywords: "BT DECOM, xây lắp điện, trạm biến áp, cơ điện tòa nhà, M&E, PCCC, chiếu sáng, cấp thoát nước, thi công điện Hà Nội",
  openGraph: {
    title: "BT DECOM | Xây lắp & Phát triển Thương mại",
    description: "Đồng hành cùng khách hàng trong thi công xây lắp điện, cơ điện và phát triển thương mại.",
    type: "website",
    locale: "vi_VN",
    url: "https://btdecom.vn",
    siteName: "BT DECOM",
    images: [{ url: "/images/bt-logo.png", alt: "BT DECOM" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-scroll-behavior="smooth" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Đến nội dung chính</a>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
