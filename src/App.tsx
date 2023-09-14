import Carousel from "./components/carousel";
import slides from "./assets/slides.json";

function App() {
  return (
    <div className="flex flex-col items-center m-auto pt-11 h-screen min-h-[800px] w-screen py-2">
      <h1 className="text-3xl text-gray-600 mb-10">Testimonials</h1>
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
