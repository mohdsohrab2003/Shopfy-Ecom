import React from "react";
import BannerImg from "../../assets/website/orange-pattern.jpg";

const BannerImgStyle = {
  background: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  margin: "0 auto",
};
const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImgStyle}
    >
      <div className="container backdrop-blur-sm py-10 ">
        <div className="space-y-6 mac-w-xl mx-auto">
          <h1 className="text-2xl text-center sm-text-left sm:text-4xl font-semibold">
            Get Notify About New Product
          </h1>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full p-3 dark:bg-gray-800 dark:text-white text-black"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
