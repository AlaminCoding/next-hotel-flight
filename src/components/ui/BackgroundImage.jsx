import Image from "next/image";

const BackgroundImage = (props) => {
  const { show, image } = props;
  return (
    <div
      className={`absolute w-full h-full top-0 left-0 transition ease-in duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src={image}
        fill
        alt="Banner Image"
        className="object-cover object-center z-0"
      />
    </div>
  );
};

export default BackgroundImage;
