import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNav from "../HomeLayouts/LeftNav";
import RightNav from "../HomeLayouts/RightNav";
import LoadingFallback from "../Contexts/LoadingFallback";

const HomeLayout = () => {
  const { state } = useNavigation();
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
        <aside className="col-span-3 sticky top-1 h-fit">
          <LeftNav></LeftNav>
        </aside>
        <section className="col-span-6">
          {state == "loading" ? (
            <LoadingFallback></LoadingFallback>
          ) : (
            <Outlet></Outlet>
          )}
        </section>

        <aside className="col-span-3 sticky top-1 h-fit">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
