import React, { useState, useEffect } from "react";
import image0 from "../../assets/image/image0.jpg";
import image1 from "../../assets/image/image1.jpg";
import image3 from "../../assets/image/image3.jpg";
import image5 from "../../assets/image/image5.jpg";
import image6 from "../../assets/image/image6.jpg";


const images = [image0, image1, image3, image5, image6];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [currentImageIndex]);

  return (
    <div className="flex bg-pink-200 min-h-max mt-20 bg-origin-border p-4">
      <div className="flex h-96 w-full bg-cover rounded-lg overflow-hidden relative ">

        {/* <img className='flex h-96  w-8/12 bg-cover rounded-lg ml-8 ease-in-out'  
        src={images[currentImageIndex]} /> */}

        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute transition-transform duration-1000 ease-in-out 
                        ${
                          index === currentImageIndex
                            ? "translate-x-0"
                            : "-translate-x-full"
                        } 
                        h-96 w-8/12 bg-cover rounded-lg ml-8`}
            src={image}
          />
        ))}

      </div>
      <div className="flex m-4  items-center">
        <h1 className="text-6xl ml-3 items-center font-serif font-bold m-2">
          'Kids World
        </h1>
        <p className=" font-extralight  text-lg align-baseline">
          A vibrant universe of stylish and comfortable clothing for your little
          ones!”
        </p>
      </div>
    </div>
  );
};

export default Banner;
