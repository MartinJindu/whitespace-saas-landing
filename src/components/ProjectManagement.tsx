import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";

const ProjectManagement = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto min-h-screen space-y-16">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col w-full space-y-4 max-sm:items-center">
          <div className="relative mb-5">
            <h1 className="relative text-4xl sm:text-5xl lg:text-6xl max-sm:text-center font-bold text-black leading-tight z-10">
              Project Management
            </h1>
            <img
              src="/Vector.png"
              alt="vector-image"
              width={514}
              height={38}
              className="w-full h-5 lg:h-7 absolute -bottom-2 right-0 lg:-bottom-4 z-0"
            />
          </div>

          <p className="text-black max-sm:text-center max-sm:text-lg md:text-sm mb-4 sm:mb-8">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>

          <Button className="flex rounded-sm w-40 bg-[#4F9CF9] hover:bg-sky-600 py-5 cursor-pointer">
            Get Started <FaArrowRight size={16} />
          </Button>
        </div>

        <div className="w-full flex justify-center mt-10 md:mt-0">
          <img
            src="/project.png"
            alt="hero-image"
            height={2000}
            width={2000}
            className="h-[60vh] w-full max-w-lg object-contain"
          />
        </div>
      </div>

      {/* Row 2 (Reversed on md) */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="flex flex-col w-full space-y-4 max-sm:items-center">
          <div className="relative mb-5">
            <h1 className="relative text-4xl sm:text-5xl lg:text-6xl max-sm:text-center font-bold text-black leading-tight z-10">
              Work{" "}
              <span className="relative">
                <span className="relative z-10">together</span>
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
            With whitespace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>

          <Button className="rounded-sm w-40 bg-[#4F9CF9] hover:bg-sky-600 py-5 cursor-pointer">
            Try it now <FaArrowRight size={16} />
          </Button>
        </div>

        <div className="w-full flex justify-center mt-10 md:mt-0 p-4">
          <img
            src="/worktogether.png"
            alt="work-img"
            width={583}
            height={543}
            className="h-[60vh] w-full max-w-lg object-contain"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col w-full space-y-4 max-sm:items-center mt-10 md:mt-0">
          <div className="relative mb-5">
            <h1 className="relative text-4xl sm:text-5xl lg:text-6xl max-sm:text-center font-bold text-black leading-tight z-10">
              Customize it to
              <br />{" "}
              <span className="relative">
                <span className="relative z-10">your needs</span>
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
            Customize the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>

          <Button className="rounded-sm w-40 bg-[#4F9CF9] hover:bg-sky-600 py-5 cursor-pointer">
            Let's Go <FaArrowRight size={16} />
          </Button>
        </div>

        <div className="w-full flex justify-center mt-10 md:mt-0">
          <img
            src="/customize.png"
            alt="customize-image"
            height={2000}
            width={2000}
            className="h-[60vh] w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
