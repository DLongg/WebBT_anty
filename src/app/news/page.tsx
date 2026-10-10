import type { Metadata } from "next";
import { news } from "@/data/news";
import { NewsClient } from "./NewsClient";

export const metadata: Metadata = {
  title: "Tin Tức & Sự Kiện | BT DECOM",
  description: "Cập nhật thông tin mới nhất, chia sẻ kiến thức, kinh nghiệm và những hoạt động nổi bật của BT DECOM trên hành trình phát triển bền vững.",
};

export default function NewsPage() {
  return <NewsClient articles={news} />;
}
