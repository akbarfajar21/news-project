// src/components/CarouselComponent.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <div className="carousel-container mx-auto mb-8">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        className="carousel"
        emulateTouch
        swipeable
      >
        <div>
          <img
            src="https://cdn.cnnindonesia.com/cnnid/images/Logo-CNN-Indonesia-Peta-Indonesia.jpg?v=8.3.1"
            alt="CNN Indonesia"
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
          />
        </div>
        <div>
          <img
            src="https://cdn01.metrotvnews.com/content/2024/07/11/kBVCaLXL/t_668f8dcd9cd46.jpg"
            alt="Metro TV News"
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/857337220/id/vektor/studio-berita-tv-dengan-penyiar-dan-memecahkan-ilustrasi-vektor-latar-belakang-dunia.jpg?s=612x612&w=0&k=20&c=HVQrtWQz4XkwCmDEuLSYE2fPUDL856g2gnJ8Q7uG4Ko="
            alt="Studio News"
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
