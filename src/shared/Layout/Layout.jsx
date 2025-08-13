import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { DiscountNotice } from "../UI/DiscountNotice/DiscountNotice";


export const Layout = () => {
  return (
    <>
      <Header />
      <DiscountNotice />
      <main className="app__main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
