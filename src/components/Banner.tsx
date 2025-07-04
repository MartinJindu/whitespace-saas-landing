import { FaArrowRight } from "react-icons/fa";
import Button from "./ui/button";

const Banner = () => {
  return (
    <div className="relative h-[700px] md:h-[400px] w-full bg-blue overflow-hidden bg-blue-950 mb-10 pb-16">
      <img
        src="/banner-side-img.png"
        alt="banner-side-img"
        className="hidden md:flex absolute -top-26 h-[530px] w-60"
      />

      <div className="relative w-full h-full flex flex-col items-center justify-center px-5 lg:px-70">
        <h1 className="relative text-4xl sm:text-5xl lg:text-6xl max-sm:text-center font-bold text-white leading-tight z-10 mb-4 sm:mb-8">
          Your work, everywhere{" "}
          <span className="relative">
            <span className="relative z-10">you are</span>
            <img
              src="/Vector.png"
              alt="vector-image"
              width={514}
              height={38}
              className="w-full h-5 lg:h-7 absolute -bottom-2 right-0 lg:-bottom-4 z-0"
            />
          </span>
        </h1>

        <p className="text-white md:text-center max-sm:text-lg md:text-sm mb-4 sm:mb-8 max-sm:leading-10">
          Access your notes from your computer, phone or tablet by synchronizing
          with various services, including whitespace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>

        <Button className="flex rounded-sm w-40 bg-[#4F9CF9] hover:bg-sky-600 py-7 cursor-pointer">
          Try Taskkey <FaArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};
export default Banner;
