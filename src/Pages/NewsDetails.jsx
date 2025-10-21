import React from "react";
import Header from "../Components/Header";
import RightNav from "../HomeLayouts/RightNav";
import { NavLink, useLoaderData, useParams } from "react-router";
import { BiArrowToLeft } from "react-icons/bi";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  //   console.log(data);

  const { newsId } = useParams();
  //   console.log(newsId);

  const newsToDisplay = data.find((news) => news.id === newsId);

  const { category_id, title, thumbnail_url, details } = newsToDisplay;

  //   console.log(newsToDisplay);

  return (
    <div className="w-[80dvw] mx-auto pb-10">
      <header>
        <Header></Header>
      </header>

      <main className=" grid grid-cols-12 gap-10">
        <section className="col-span-9">
          <h1 className="text-xl font-bold mb-5">Dragon News</h1>

          {/* {news details block} */}
          <div className="p-3 flex flex-col gap-5 items-left justify-center">
            <img src={thumbnail_url} alt={title} className="rounded-sm" />
            <div>
              <h2 className="text-xl font-bold">{title}</h2>
              <p>{details}</p>
            </div>
          </div>
        </section>
        <aside className="col-span-3 sticky top-1 h-fit">
          <RightNav></RightNav>
        </aside>
      </main>

      <NavLink to={`/category/${category_id}`}>
        <button
          type="button"
          className="btn btn-secondary text-white flex items-center"
        >
          <FaArrowAltCircleLeft></FaArrowAltCircleLeft> See all news of this
          category
        </button>
      </NavLink>
    </div>
  );
};

export default NewsDetails;
