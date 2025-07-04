import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";
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
      <main className="mt-16">
        <Hero />
        <ProjectManagement />
        <PricePlan />
        <Banner />
        <Sponsor />
        <Banner2 />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};
export default App;
