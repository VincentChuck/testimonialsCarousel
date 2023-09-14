import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Slide from "./slide";
import Testimonial from "./testimonial";

type CarouselProps = {
  slides: { image: string; imageAlt: string; title: string; content: string }[];
};

function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  function previousSlide() {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  function nextSlide() {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  return (
    <div className="w-[90%] sm:w-[70%] xl:w-[60%] max-w-3xl">
      <Testimonial
        title={slides[current].title}
        content={slides[current].content}
      />
      <div id="carousel-container" className="relative aspect-[16/9]">
        <div
          id="slides-container"
          className="flex overflow-hidden h-full w-full"
        >
          <div
            className="flex transition ease-out duration-400 h-full w-full grow"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((slide, index) => {
              return (
                <Slide
                  key={"slide" + index}
                  image={slide.image}
                  imageAlt={slide.imageAlt}
                />
              );
            })}
          </div>
        </div>

        <div
          id="slide-control"
          className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 lg:px-10 text-3xl"
        >
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div
          id="slide-pagination"
          className="absolute bottom-0 lg:py-6 py-4 flex justify-center gap-3 w-full"
        >
          {slides.map((_slide, index) => {
            return (
              <div
                onClick={() => {
                  setCurrent(index);
                }}
                key={"circle" + index}
                className={`rounded-full w-5 h-5 cursor-pointer  ${
                  index == current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
