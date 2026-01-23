
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

import { Roboto_Serif, Poppins } from "next/font/google";
import Script from 'next/script';

import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { useEffect } from 'react';

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto-serif",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600"],
  variable: "--font-poppins",
});



export const metadata = {
  title: "Lawfulfill",
  description: "Lawfirm website",
};

export default function RootLayout({ children }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js"); // only runs in the browser
  }, []);

  return (
    <html lang="en">
      
      <body className={`${robotoSerif.variable} ${poppins.variable} d-flex flex-column align-items-center`}>

        <Navbar/>
        {children}
        <Footer/>




      </body>
    
    </html>
  );
}
