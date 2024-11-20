import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, natus dignissimos animi officiis mollitia cum nihil exercitationem in saepe voluptas omnis asperiores iure distinctio, eum dolorem sed molestiae, consequuntur beatae!",
  },
  {
    id: 2,
    img: Image2,
    title: "30% of on all Women Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, natus dignissimos animi officiis mollitia cum nihil exercitationem in saepe voluptas omnis asperiores iure distinctio, eum dolorem sed molestiae, consequuntur beatae!",
  },
  {
    id: 3,
    img: Image3,
    title: "70 Off on all Product Sale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, natus dignissimos animi officiis mollitia cum nihil exercitationem in saepe voluptas omnis asperiores iure distinctio, eum dolorem sed molestiae, consequuntur beatae!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className="relative overflow-hidden min-h-[540px] sm:min-h-[650] bg-gray-100  flex justify-between items-center dark:bg-gray-500 dark:text-white duration-200">
        {/* BackGround Pattern */}
        <div className="h-[700px] w-[700px] absolute bg-primary/40 -top-1/2 right-3 sm:right-0 rounded-3xl rotate-45 -z-9"></div>
        {/* Hero Section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text-content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-in"
                      data-aos-once="true"
                      data-aos-duration="500"
                      className="text-5xl sm:text-4xl lg:text-7xl font-bolds"
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="500"
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <div>
                      <button
                        className="bg-gradient-to-r  from-primary
             to-secondary transition-all duration-200 text-white py-1 px-4  rounded-full mt-6 sm:mt-3"
                        onClick={() => handleOrderPopup()}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                  {/* Image Section  */}
                  <div className="order-2 sm:order-1">
                    <div
                      className="relative z-10"
                      data-aos="zoom-in"
                      data-aos-once="true"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="h-[400px] w-[400px] sm:h-[450px] sm:w-[450] sm:scale-125 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
