import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { CartContextProvider } from "@/context/cart-context/cart-context";
import Footer from "@/components/footer";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Food Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${noto_sans.className} `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CartContextProvider>
            <div className="flex flex-col min-h-full">
              <Header />
              <main className="flex-1 pb-8">{children}</main>
              <Footer />
            </div>
          </CartContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
