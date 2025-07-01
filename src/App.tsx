import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto">
      <Navbar />
      <main className="p-4">
        <Hero />
        <div>hello world</div>
      </main>
    </div>
  );
};
export default App;
