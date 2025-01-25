export const Brands = () => {
  const brands = [
    "https://imgs.search.brave.com/eU08RsZCToLd2fIoElL7IntuMTyFlOpKFTHm6--lWmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduaGlsbC5j/b20vcmVzaXplX2lt/Zy5waHA_YXR5cD1w/YWdlX2ZpbGUmcHRo/PWZ0X2NhX2N0fHwy/NTl8fGNvbnRlc3Rm/aWxlXzUmZmxwPTE3/MTUzMTY1NDUtNTQy/NDI5NDA2NjYzZGE3/NDFkZTA2OTAtMjYw/MDM1NjkucG5n",
    "https://imgs.search.brave.com/eU08RsZCToLd2fIoElL7IntuMTyFlOpKFTHm6--lWmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduaGlsbC5j/b20vcmVzaXplX2lt/Zy5waHA_YXR5cD1w/YWdlX2ZpbGUmcHRo/PWZ0X2NhX2N0fHwy/NTl8fGNvbnRlc3Rm/aWxlXzUmZmxwPTE3/MTUzMTY1NDUtNTQy/NDI5NDA2NjYzZGE3/NDFkZTA2OTAtMjYw/MDM1NjkucG5n",
    "https://imgs.search.brave.com/eU08RsZCToLd2fIoElL7IntuMTyFlOpKFTHm6--lWmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduaGlsbC5j/b20vcmVzaXplX2lt/Zy5waHA_YXR5cD1w/YWdlX2ZpbGUmcHRo/PWZ0X2NhX2N0fHwy/NTl8fGNvbnRlc3Rm/aWxlXzUmZmxwPTE3/MTUzMTY1NDUtNTQy/NDI5NDA2NjYzZGE3/NDFkZTA2OTAtMjYw/MDM1NjkucG5n",
    "https://imgs.search.brave.com/eU08RsZCToLd2fIoElL7IntuMTyFlOpKFTHm6--lWmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduaGlsbC5j/b20vcmVzaXplX2lt/Zy5waHA_YXR5cD1w/YWdlX2ZpbGUmcHRo/PWZ0X2NhX2N0fHwy/NTl8fGNvbnRlc3Rm/aWxlXzUmZmxwPTE3/MTUzMTY1NDUtNTQy/NDI5NDA2NjYzZGE3/NDFkZTA2OTAtMjYw/MDM1NjkucG5n",
    "https://imgs.search.brave.com/eU08RsZCToLd2fIoElL7IntuMTyFlOpKFTHm6--lWmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduaGlsbC5j/b20vcmVzaXplX2lt/Zy5waHA_YXR5cD1w/YWdlX2ZpbGUmcHRo/PWZ0X2NhX2N0fHwy/NTl8fGNvbnRlc3Rm/aWxlXzUmZmxwPTE3/MTUzMTY1NDUtNTQy/NDI5NDA2NjYzZGE3/NDFkZTA2OTAtMjYw/MDM1NjkucG5n",
    "https://imgs.search.brave.com/eU08RsZCToLd2fIoElL7IntuMTyFlOpKFTHm6--lWmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduaGlsbC5j/b20vcmVzaXplX2lt/Zy5waHA_YXR5cD1w/YWdlX2ZpbGUmcHRo/PWZ0X2NhX2N0fHwy/NTl8fGNvbnRlc3Rm/aWxlXzUmZmxwPTE3/MTUzMTY1NDUtNTQy/NDI5NDA2NjYzZGE3/NDFkZTA2OTAtMjYw/MDM1NjkucG5n",
  ];

  return (
    <div className="py-11 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted Customer</h2>
        <div className="flex space-x-12 animate-slide-left">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};