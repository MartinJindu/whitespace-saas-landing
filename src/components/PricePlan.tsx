import { LiaCheckCircle } from "react-icons/lia";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const PricePlan = () => {
  const pricePlan = [
    {
      name: "Free",
      price: 0,
      desc: "Capture ideas and find them quickly",
      pros: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      name: "Personal",
      price: 11.99,
      desc: "Keep home and family on track",
      pros: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      name: "Organization",
      price: 49.99,
      desc: "Capture ideas and find them quickly",
      pros: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto min-h-screen space-y-5 mt-28 px-4 mb-14">
      <div className="flex flex-col items-center">
        <h1 className="relative text-4xl sm:text-5xl lg:text-6xl max-sm:text-center font-bold text-black leading-tight z-10 mb-4 sm:mb-8">
          Choose{" "}
          <span className="relative">
            <span className="relative z-10">Your Plan</span>
            <img
              src="/Vector.png"
              alt="vector-image"
              width={514}
              height={38}
              className="w-full h-5 lg:h-7 absolute -bottom-2 right-0 lg:-bottom-4 z-0"
            />
          </span>
        </h1>

        <p className="text-black text-center max-sm:text-lg md:text-sm mb-4 sm:mb-8">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Every note has the right plan for
          you.
        </p>
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {pricePlan.map((plan) => (
            <SwiperSlide key={plan.name}>
              <div
                className={`px-5 py-5 rounded-sm ${
                  plan.name === "Personal"
                    ? "shadow-lg h-[530px] py-12"
                    : "border border-amber-200 h-fit"
                }`}
              >
                <div className="flex flex-col space-y-4">
                  <h3
                    className={`${
                      plan.name === "Personal"
                        ? "text-blue-900 font-bold"
                        : "font-semibold"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`font-bold text-[20px] ${
                      plan.name === "Personal" ? "text-blue-900 " : ""
                    }`}
                  >
                    ${plan.price}
                  </p>
                  <p
                    className={`text-xs font-semibold ${
                      plan.name === "Personal" ? "text-blue-900 " : ""
                    }`}
                  >
                    {plan.desc}
                  </p>
                </div>

                <div className="mt-5 flex flex-col space-y-5">
                  {plan.pros.map((proItem, i) => (
                    <div key={i} className="flex space-x-2 items-center">
                      <div
                        className={`${
                          plan.name === "Personal" ? "text-blue-500" : ""
                        }`}
                      >
                        <LiaCheckCircle size={16} />
                      </div>

                      <div
                        className={`text-xs lg:text-sm ${
                          plan.name === "Personal"
                            ? "text-blue-900 font-bold"
                            : "font-semibold"
                        }`}
                      >
                        {proItem}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  className={`border mt-5 rounded-sm cursor-pointer ${
                    plan.name === "Personal"
                      ? "bg-blue-400 text-white hover:bg-blue-500"
                      : "bg-white text-black border-amber-200 hover:bg-gray-100"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex w-full py-2 space-x-4 items-center justify-center">
        {pricePlan.map((plan) => (
          <div
            key={plan.name}
            className={`w-1/3 px-5 py-3 rounded-sm ${
              plan.name === "Personal"
                ? "shadow-md h-[530px] py-12"
                : "border border-amber-200 h-fit"
            }`}
          >
            <div className="flex flex-col space-y-4">
              <h3
                className={`${
                  plan.name === "Personal"
                    ? "text-blue-900 font-bold"
                    : "font-semibold"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`font-bold text-[20px] ${
                  plan.name === "Personal" ? "text-blue-900 " : ""
                }`}
              >
                ${plan.price}
              </p>
              <p
                className={`text-xs font-semibold ${
                  plan.name === "Personal" ? "text-blue-900 " : ""
                }`}
              >
                {plan.desc}
              </p>
            </div>

            <div className="mt-5 flex flex-col space-y-5">
              {plan.pros.map((proItem, i) => (
                <div key={i} className="flex space-x-2 items-center">
                  <div
                    className={`${
                      plan.name === "Personal" ? "text-blue-500" : ""
                    }`}
                  >
                    <LiaCheckCircle size={16} />
                  </div>

                  <div
                    className={`text-xs lg:text-sm ${
                      plan.name === "Personal"
                        ? "text-blue-900 font-bold"
                        : "font-semibold"
                    }`}
                  >
                    {proItem}
                  </div>
                </div>
              ))}
            </div>

            <Button
              className={`border mt-5 rounded-sm cursor-pointer ${
                plan.name === "Personal"
                  ? "bg-blue-400 text-white hover:bg-blue-500"
                  : "bg-white text-black border-amber-200 hover:bg-gray-100"
              }`}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricePlan;
