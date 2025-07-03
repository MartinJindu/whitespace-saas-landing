import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";

const Banner2 = () => {
  return (
    <div className="bg-blue-950 relative min-h-[600px] md:min-h-[500px] w-full overflow-hidden mb-10 px-5 py-10">
      {/* BG overlay */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src="/Element2.png"
          alt="element2"
          className="h-full w-full object-contain opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/Apps.png"
            alt="app-image"
            className="h-[40vh] md:h-[60vh] lg:h-[50vh] w-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 text-white items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Work with Your Favorite Apps Using whitespace
          </h1>

          <p className="text-lg md:text-base">
            Whitespace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>

          <Button className="flex items-center gap-2 rounded-sm bg-[#4F9CF9] hover:bg-sky-600 px-6 py-4 cursor-pointer">
            Read more <FaArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
