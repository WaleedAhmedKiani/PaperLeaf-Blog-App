
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog App",
  description: "A blog application built with Next.js and React with MongoDB. Features include user authentication, CRUD operations for blog posts, and responsive design.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <div className="container">
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />

            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
