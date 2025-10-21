import React from "react";

const LoadingFallback = () => {
  return (
    <div className="min-h-screen flex justify-center items-center scale-200">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default LoadingFallback;
