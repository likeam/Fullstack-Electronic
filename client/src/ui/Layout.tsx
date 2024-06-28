import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>
    {/* Header */}
    <Header />
    {children}
    <Footer />
  </>;
};

export default Layout;
