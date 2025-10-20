import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-5 w-[80dvw] mx-auto p-3 bg-base-200 rounded-sm">
      <span className="btn btn-secondary text-lg">Latest</span>
      <Marquee className="font-semibold" pauseOnHover speed={100}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          veritatis, odio voluptates dolor eius adipisci libero laborum pariatur
          quos quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          veritatis, odio voluptates dolor eius adipisci libero laborum pariatur
          quos quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          veritatis, odio voluptates dolor eius adipisci libero laborum pariatur
          quos quisquam!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
