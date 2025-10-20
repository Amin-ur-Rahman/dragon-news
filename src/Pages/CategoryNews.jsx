import React from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  // const [allNews, setAllNews] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();
  // const [categoryNews, setCategoryNews] = useState([]);

  // useEffect(() => {
  //   if (id == "0") {
  //     setCategoryNews(data);
  //     return;
  //   } else if (id == "1") {
  //     const breakingNews = data.filter((news) => news.others.is_today_pick);
  //     setCategoryNews(breakingNews);
  //     return;
  //   }
  //   const filteredNews = data.filter((news) => news.category_id === Number(id));
  //   setCategoryNews(filteredNews);
  // }, [data, id]);

  // console.log("category id", id);

  // useEffect(() => {
  //   fetch("/news.json")
  //     .then((res) => res.json())
  //     .then((result) => setAllNews(result));
  // }, []);

  const categoryNews = data.filter((news) => {
    if (id == "0") return true;
    else if (id == "1") return news.others?.is_today_pick;

    return news.category_id === Number(id);
  });
  return (
    <div>
      {categoryNews.length <= 0 ? (
        <h1 className="text-xl text-center">No news today</h1>
      ) : (
        <div>
          {categoryNews.map((news) => {
            return <NewsCard news={news} key={news.id}></NewsCard>;
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryNews;
