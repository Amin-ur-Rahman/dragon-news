import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { Link, NavLink } from "react-router";

function NewsCard({ news }) {
  const { id, title, rating, total_view, author, thumbnail_url, details } =
    news;

  return (
    <div className="card bg-base-100 shadow-md  rounded-lg overflow-hidden my-5">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium text-gray-800">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <button className="hover:text-primary">
            <FaRegBookmark />
          </button>
          <button className="hover:text-primary">
            <FaShareAlt />
          </button>
        </div>
      </div>

      <h2 className="px-4 text-lg font-semibold leading-snug text-gray-900">
        {title}
      </h2>

      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-md object-cover"
        />
      </figure>

      <div className="px-4 pb-3 text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 300)}...{" "}
            <NavLink
              to={`/news-datails/${id}`}
              className="text-primary font-medium"
            >
              Read More
            </NavLink>
          </>
        ) : (
          details
        )}
      </div>

      <div className="flex justify-between items-center border-t px-4 py-3">
        <div className="flex items-center gap-1 text-warning">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.round(rating.number) ? "text-warning" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
