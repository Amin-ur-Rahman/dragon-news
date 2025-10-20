import React, { Suspense, useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);
  // console.log(categories);

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-gray-600">All Categories</h2>
      <div id="catagory-block" className="flex flex-col gap-3">
        <Suspense
          fallback={
            <p className="flex justify-center">
              <span className="loading loading-spinner text-error"></span>
            </p>
          }
        >
          {categories.map((category) => {
            return (
              <NavLink
                key={category.id}
                to={`category/${category.id}`}
                className="hover:bg-base-300 btn bg-white border-0 shadow-none"
              >
                {category.name}
              </NavLink>
            );
          })}
        </Suspense>
      </div>
    </div>
  );
};

export default LeftNav;
