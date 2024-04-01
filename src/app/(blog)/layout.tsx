import "./globals.css";
// import { Gowun_Dodum } from "next/font/google";

import type { FC, PropsWithChildren } from "react";

// const inter = Ubuntu({ weight: "300", subsets: ["latin"] });
// const gowunDodum = Gowun_Dodum({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Flik Lab",
  description: "Front End Developer of Seoul, Korea",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
