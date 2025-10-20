import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNav from "../HomeLayouts/LeftNav";
import RightNav from "../HomeLayouts/RightNav";

const HomeLayout = () => {
  return (
    <div className="w-[80dvw] mx-auto ">
      <header>
        <Header></Header>
        <section id="news-slide">
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="grid grid-cols-12 gap-6 ">
        <aside className="col-span-3">
          <LeftNav></LeftNav>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
