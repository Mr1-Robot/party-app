import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecureRoutes from "@/components/SecureRoutes";

export const metadata = {
  title: "Hosting Party",
  description:
    "Start a hosting party and watch, share, and enjoy with the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-orange-50 flex flex-col min-h-screen`}
      >
        <header className="py-6 px-4 sm:px-16 lg:px-24 shadow-md">
          <Navbar />
        </header>
        <SecureRoutes>
          <main className="flex-auto px-4 sm:px-16 lg:px-24 py-24">
            {children}
          </main>
        </SecureRoutes>
        <Footer />
      </body>
    </html>
  );
}
