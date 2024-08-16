import React, { useState } from "react";
import ModalComponent from "./Modal";
import { Skeleton } from "@nextui-org/react";

const Card = ({ news, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const formattedDate = news.isoDate.split("T")[0];

  return (
    <div key={index} className="shadow-lg rounded-lg overflow-hidden bg-white">
      <div className="relative w-full h-100">
        {!imageLoaded && (
          <Skeleton
            className="absolute inset-0"
            width="100%"
            height="100%"
            style={{ borderRadius: "0px" }}
          />
        )}
        <img
          src={news.image.large}
          alt={news.title}
          className={`w-full h-100 object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-gray-400 block mb-2">{formattedDate}</span>
        <h2 className="font-bold text-lg mb-2">{news.title}</h2>
        <p className="text-gray-700 text-sm mb-4">{news.contentSnippet}</p>
        <ModalComponent news={news} />
      </div>
    </div>
  );
};

export default Card;
