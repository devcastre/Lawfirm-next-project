
"use client"; 

import { useEffect } from "react";

export default function NotFoundPage() {
  useEffect(() => {

    console.log("This runs only in the browser");

    const element = document.getElementById("my-element");
    if (element) {
      element.style.color = "red";
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "5rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn’t find the page you were looking for.</p>
    </div>
  );
}
