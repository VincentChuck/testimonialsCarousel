type TestimonialProps = {
  title: string;
  content: string;
};

function Testimonial({ title, content }: TestimonialProps) {
  return (
    <div className="flex flex-col items-center gap-2 mb-3">
      <h1 className="text-3xl">{title}</h1>
      <p className="text-xl text-gray-500 text-center">{content}</p>
    </div>
  );
}

export default Testimonial;
