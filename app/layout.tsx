import type { Metadata } from "next";
import {TheHeader} from "@/components/TheHeader";
import {TheFooter} from "@/components/TheFooter";

export const metadata: Metadata = {
  title: "Фёдор Колтун | Fedor Koltun",
  description: "Фёдор Колтун - мошенник и лжец | Fedor Koltun is a thief and a liar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
        <body>
            <TheHeader/>
                {children}
             <TheFooter/>
        </body>
    </html>
  );
}