import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="relative w-full h-full">
      <Navbar />
      <div className="absolute top-28 right-0">
        <img
          src="/assets/images/Group99.svg"
          alt=""
          className="hidden md:block"
        />
        <img
          src="/assets/images/Group9.svg"
          alt=""
          className="block md:hidden"
        />
      </div>
      <Header />
      <div
        className="w-full relative flex justify-center items-center py-20 "
        id="products"
      >
        <img
          src="/assets/images/Group8.svg"
          alt=""
          className="max-w-[871px] max-lg:max-w-[650px] max-md:max-w-[480px] max-sm:max-w-[300px]"
        />
        <div className="absolute -left-14 max-md:left-0 top-2 max-sm:top-6">
          <img
            src="/assets/images/Group40.svg"
            alt=""
            className="md:h-[317px] md:w-[268px]"
          />
        </div>
      </div>
      <Projects />
    </main>
  );
}

export default App;
