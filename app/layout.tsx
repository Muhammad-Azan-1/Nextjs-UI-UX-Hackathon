
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import localFont from "next/font/local";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false;
import CartContextProvider from "@/context/CartContextProvider";
import WishlistContextProvider from "@/context/WishListContextProvider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hekhto - Sofa & Furniture",
  description: "we are expert in selling sofa and funiture to you with good quality and low price",
};

import { Josefin_Sans, Lato } from 'next/font/google';


// Load fonts optimally
const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'], display: 'swap' });
const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'], display: 'swap' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} ${lato.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      <WishlistContextProvider>
        <CartContextProvider>
          {children}
        </CartContextProvider>
        </WishlistContextProvider>
        <Toaster />
      
      </body>
    </html>
  );
}
