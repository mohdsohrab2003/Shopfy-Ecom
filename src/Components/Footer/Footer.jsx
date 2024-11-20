import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = ({ handleOrderPopup }) => {
  return (
    <div style={BannerImg} className="text-white mb-0 ">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5 ">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl  text-xl font-bold mb-10 flex gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy {}
            </h1>
            <p className=" text-md  font-semibold leading-1 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              error nulla sapiente et optio quos obcaecati dignissimos eveniet
              necessitatibus maxime!
            </p>
            <button
              className="bg-primary  hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-8 group-hover:bg-white group-hover:text-primary   "
              onClick={handleOrderPopup}
            >
              Order Now
            </button>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-2xl font-bold sm:text-left text-justify mb-3">
                  Important Link
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li
                      className=" text-xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={data.title}
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* 2 Footer link */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-2xl font-bold sm:text-left text-justify mb-3">
                  Important Link
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li
                      className=" text-xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={data.title}
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social media */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
