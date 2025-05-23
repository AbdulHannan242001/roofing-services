import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
