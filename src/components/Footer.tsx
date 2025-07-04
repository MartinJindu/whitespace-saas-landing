import {
  FaFacebookF,
  FaArrowRight,
  FaGlobe,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./ui/button";

const Footer = () => {
  return (
    <footer className="min-h-[50vh] bg-blue-950 w-full text-white">
      <div className="flex flex-col max-w-7xl h-full mx-auto px-5">
        <div className="flex flex-col md:flex-row md:space-x-4 w-full mt-20 mb-10 ">
          <div className="flex flex-col items-start space-y-5 md:w-1/5 max-sm:items-center">
            <div className="flex items-center justify-center space-x-2 ">
              <img
                src="/logo-white.png"
                alt="logo"
                className="w-7 h-7 object-contain"
              />
              <h1 className="text-[19px] font-bold">whitespace</h1>
            </div>
            <div className="">
              <p className="max-sm:text-center">
                Whitespace was created for the new ways we live and work. We
                make a better workspace around the world
              </p>
            </div>
          </div>

          <div className="md:w-1/5 flex flex-col space-y-4 max-sm:items-center max-sm:mt-10 ">
            <h1 className="font-bold">Product</h1>
            <p>Overview</p>
            <p>Pricing</p>
            <p>Customer stories</p>
          </div>
          <div className="md:w-1/5 flex flex-col space-y-4 max-sm:items-center max-sm:mt-10 ">
            <h1 className="font-bold">Resources</h1>
            <p>Blog</p>
            <p>Guides & tutorials</p>
            <p>Help center</p>
          </div>
          <div className="md:w-1/5 flex flex-col space-y-4 max-sm:items-center max-sm:mt-10 ">
            <h1 className="font-bold">Company</h1>
            <p>About us</p>
            <p>Careers</p>
            <p>Media kit</p>
          </div>

          <div className="md:w-1/5 flex flex-col space-y-4 max-sm:items-center max-sm:mt-10">
            <h1 className="text-[20px] font-bold">Try it Today</h1>
            <p className="max-sm:text-center">
              Get started for free. Add your whole team as your needs grow.
            </p>

            <Button className="flex items-center gap-2 rounded-sm bg-[#4F9CF9] hover:bg-sky-600 px-6 py-5 cursor-pointer">
              Start today <FaArrowRight size={16} />
            </Button>
          </div>
        </div>

        <hr className="hidden md:flex border border-blue-800/30" />

        <div className="flex flex-col md:justify-between md:flex-row md:space-x-4 w-full mt-10 mb-10 ">
          <div className="flex flex-col max-sm:space-y-2 md:flex-row md:space-x-4 items-center">
            <div className="flex items-center gap-1">
              <FaGlobe />
              English
              <RiArrowDropDownLine />
            </div>
            <div>
              <p>Terms & privacy</p>
            </div>
            <div>
              <p>Security</p>
            </div>
            <div>
              <p>Status</p>
            </div>
            <div>
              <p>&copy;2025 Whitespace LLC.</p>
            </div>
          </div>

          <hr className="md:hidden mt-5 border border-blue-800/30" />
          <div className="flex space-x-5 max-sm:justify-center max-sm:mt-5">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
