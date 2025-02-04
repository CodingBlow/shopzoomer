import mainphoto from "../images/Frontpage.png";

export const Hero = () => {
  return (
    <div className="relative h-[20vh] sm:h-[60vh] md:h-[30vh] lg:h-[60vh] mt-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mainphoto})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};
