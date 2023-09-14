type SlideProps = {
  image: string;
  subject: string;
  message: string;
};

function Slide({ image, subject, message }: SlideProps) {
  return (
    <div className="w-full h-full grow shrink-0 p-3 lg:p-6">
      <div
        id="slide-container"
        className="bg-[#f8edeb] h-full w-full px-12 py-4 lg:px-14 lg:py-8 rounded-3xl flex flex-col lg:flex-row items-center lg:flex-wrap"
      >
        <div className="w-5/6 lg:w-1/2 aspect-[4/3] lg:aspect-[16/9] rounded-xl">
          <img src={image} alt={subject} className="rounded-xl w-full h-full" />
        </div>
        <span className="text-3xl">{subject}</span>
      </div>
    </div>
  );
}

export default Slide;
