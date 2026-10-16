import { HomeTemplate } from "@/components/home/HomeTemplate";

export const metadata = {
  alternates: {
    canonical: '/',
  },
  // 其他首页专属metadata配置
};

export default function Page() {
  return <HomeTemplate />;
}
