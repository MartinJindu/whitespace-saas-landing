import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectManagement from "./components/ProjectManagement";

const App = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto">
      <Navbar />
      <main className="p-4">
        <Hero />
        <ProjectManagement />
      </main>
    </div>
  );
};
export default App;
