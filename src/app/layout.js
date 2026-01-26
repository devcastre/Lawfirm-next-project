
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

import { Roboto_Serif, Poppins } from "next/font/google";
// import Script from 'next/script';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import BootstrapJSClient from './BootstrapJSClient';


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


  return (
    <html lang="en">
      
      <body className={`${robotoSerif.variable} ${poppins.variable} d-flex flex-column align-items-center`}>

        <BootstrapJSClient/>

        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}


        {/* <Script
          src="/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        /> */}
      </body>
    
    </html>
  );
}
