import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";

const Sponsor = () => {
  const sponsorImg = [
    {
      path: "/Microsoft.png",
      alt: "microsoft-img",
    },
    {
      path: "/Slack.png",
      alt: "slack-img",
    },
    {
      path: "/Google.png",
      alt: "google-img",
    },
  ];

  return (
    <section className="max-w-7xl px-4 mx-auto min-h-screen space-y-10 mb-10">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full flex justify-center">
          <img
            src="/Element.png"
            alt="element-image"
            height={2000}
            width={2000}
            className="h-[30vh] md:h-[60vh] w-full max-w-lg object-contain"
          />
        </div>

        <div className="flex flex-col w-full space-y-4 max-sm:items-center">
          <div className="relative mb-5">
            <h1 className="relative text-4xl sm:text-5xl lg:text-6xl max-sm:text-center font-bold text-black leading-tight z-10">
              100%{" "}
              <span className="relative">
                <span className="relative z-10">your data</span>
                <img
                  src="/Vector.png"
                  alt="vector-image"
                  width={514}
                  height={38}
                  className="w-full h-5 lg:h-7 absolute -bottom-2 right-0 lg:-bottom-4 z-0"
                />
              </span>
            </h1>
          </div>

          <p className="text-black max-sm:text-center max-sm:text-lg md:text-sm mb-4 sm:mb-8">
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>

          <Button className="rounded-sm w-40 bg-[#4F9CF9] hover:bg-sky-600 py-5 cursor-pointer">
            Read more <FaArrowRight size={16} />
          </Button>
        </div>
      </div>

      {/* Sponsor */}
      <div className="flex flex-col items-center w-full px-4">
        <div className="relative mb-20 text-center">
          <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight z-10">
            Our{" "}
            <span className="relative">
              <span className="relative z-10">sponsors</span>
              <img
                src="/Vector.png"
                alt="vector-image"
                width={514}
                height={38}
                className="w-full h-5 lg:h-7 absolute -bottom-2 right-0 lg:-bottom-4 z-0"
              />
            </span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-full">
          {/* Apple Image */}
          <div className="w-32 md:w-1/4 h-16 flex items-center justify-center">
            <img
              src="/Apple.png"
              alt="apple-img"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Loop Images */}
          {sponsorImg.map((img) => (
            <div
              key={img.alt}
              className="w-32 md:w-1/4 h-16 flex items-center justify-center"
            >
              <img
                src={img.path}
                alt={img.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Sponsor;
