"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Leema webTech</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
