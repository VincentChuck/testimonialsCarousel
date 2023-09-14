import Carousel from "./components/carousel";
import slides from "./assets/slides.json";

function App() {
  return (
    <div className="flex flex-col items-center m-auto pt-11 h-screen min-h-[800px] w-screen py-2 bg-[#fcd5ce]">
      <h1 className="lg:text-7xl text-3xl text-gray-600 mb-2">
        Testimonials Carousel
      </h1>
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
