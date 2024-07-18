import img1 from "../../assets/images/banner/5.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";

const images = [img1, img2, img3, img4];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    const prevSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  const handleNextSlide = () => {
    const nextSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  return (
    <div
      className="grid grid-cols-4 bg-cover bg-center w-full md:h-[600px] border rounded shadow-lg gap-2 p-4 font-poppins mb-12"
      style={{ backgroundImage: `url(${images[currentSlide]})` }}
    >
      <div className="col-span-3 flex items-start text-white gap-y-2 flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgpba(21,21,21,0.00)]">
        <h2 className="text-3xl md:text-6xl font-bold flex flex-col gap-y-2">
          <p className="text-blue-400">Affordable</p> <p className="text-yellow-400">Price For Car</p> <p>Servicing</p>
        </h2>
        <p className="w-2/3">
         Excelent Services make customer adorable happier and easy to Connect them.
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <button className="btn btn-primary md:w-[150px] md:h-[50px]">
            Discover More
          </button>
          <button className="btn btn-secondary md:w-[150px] md:h-[50px]">
            Latest Project
          </button>
        </div>
      </div>
      <div className="flex gap-2 items-end justify-end pr-2 md:pr-12 pb-2 md:pb-20">
        <button
          className="btn btn-circle bg-transparent text-white"
          onClick={handlePrevSlide}
        >
          <IoIosArrowRoundBack className="text-4xl" />
        </button>
        <button
          className="btn btn-circle bg-orange-600 text-white"
          onClick={handleNextSlide}
        >
          <IoIosArrowRoundForward className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
