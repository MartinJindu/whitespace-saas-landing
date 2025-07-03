import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricePlan from "./components/PricePlan";
import ProjectManagement from "./components/ProjectManagement";
import Sponsor from "./components/Sponsor";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProjectManagement />
        <PricePlan />
        <Banner />
        <Sponsor />
        <Banner2 />
        <Testimonial />
      </main>
    </div>
  );
};
export default App;
