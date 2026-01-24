


"use client";

import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
