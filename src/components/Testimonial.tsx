"use client";

import { useRef, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      img: "",
      text: "If you haven’t tried whitespace yet, you need to give it a shot for your next event. It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      name: "Jessie Owner",
      company: "Founder, XYZ Company",
      starRating: 5,
    },
    {
      img: "",
      text: "Whitespace made everything so seamless. Their intuitive design and fast setup is a game changer!",
      name: "Alex Carter",
      company: "CEO, ABC Inc.",
      starRating: 4,
    },
    {
      img: "",
      text: "An amazing platform with top-notch support. I’m extremely satisfied with the service provided.",
      name: "Sophie Lee",
      company: "CTO, TechWorld",
      starRating: 5,
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;

    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <section className="max-w-7xl mx-auto min-h-[50vh] flex flex-col justify-center items-center px-5 mb-16 relative">
      {/* Header */}
      <div className="relative text-center mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight z-10">
          See what our{" "}
          <span className="relative">
            <span className="relative z-10">trusted </span>
            <img
              src="/Vector.png"
              alt="vector-image"
              width={514}
              height={38}
              className="w-full h-5 lg:h-7 absolute -bottom-2 right-0 lg:-bottom-4 z-0"
            />
          </span>
          users say
        </h1>
      </div>

      {/* Swiper */}
      <div className="w-full relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile: 1 slide, dots visible
            768: { slidesPerView: 3 }, // Desktop: 3 slides, navigation buttons
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col p-6 space-y-4 shadow-md rounded-lg h-full mb-10 ${
                  index > 0
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                <div className="mb-5 flex justify-center">
                  {testimonial.img ? (
                    <img src={testimonial.img} alt={testimonial.name} />
                  ) : (
                    <div className="w-16 h-16 bg-gray-300 rounded-full" />
                  )}
                </div>

                <p className="text-sm text-center">{testimonial.text}</p>

                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <p className="font-bold">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(testimonial.starRating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mr-1" />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs mt-1">{testimonial.company}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots: Visible only on mobile */}
        <div className="swiper-pagination md:hidden mt-4" />

        {/* Navigation Buttons: Visible only on desktop */}
        <div className="hidden md:flex justify-center gap-4 relative bottom-0 mb-4 w-full">
          <button
            ref={prevRef}
            className="p-3 rounded-full bg-gray-300 hover:bg-gray-400"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="p-3 rounded-full bg-gray-300 hover:bg-gray-400"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Custom Pagination Style */}
    </section>
  );
};

export default Testimonial;
