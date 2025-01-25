export const Hero = () => {
  return (
    <div className="relative h-[50vh] md:h-70vh mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.coolcareservice.in/image/cache/catalog/coolcare-banner-1920x685.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};