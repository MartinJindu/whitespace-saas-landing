import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[80vh]   items-center justify-between">
      {/* Left Text */}
      <div className="flex flex-col w-full md:w-1/2 space-y-8 max-sm:items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl max-sm:text-center font-bold text-[#4F9CF9] leading-tight">
          Get More Done with whitespace
        </h1>

        <p className="text-[#4F9CF9] max-sm:text-center max-sm:text-lg  mb-6 sm:mb-12">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks.
        </p>

        <Button className="rounded-sm w-44 bg-[#4F9CF9] hover:bg-sky-600 py-5 cursor-pointer">
          Try Whitespace free
        </Button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/hero.png"
          alt="hero-image"
          height={2000}
          width={2000}
          className="h-[60vh] w-full max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
