type SlideProps = {
  image: string;
  imageAlt: string;
};

function Slide({ image, imageAlt }: SlideProps) {
  return (
    <div className="w-full h-full grow shrink-0">
      <img src={image} alt={imageAlt} className="w-full h-full" />
    </div>
  );
}

export default Slide;
