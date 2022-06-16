import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MyImages = () => {
  const [images, setImages] = useState([]);

  const showImages = async () => {
    let res = await fetch(`https://api.thecatapi.com/v1/images/?limit=10& `, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "x-api-key": "709ca42e-10f2-465f-a296-07ffb1b5276a",
      },
    });
    let pictures = await res.json();
    setImages(pictures);
  };

  useEffect(() => {
    showImages();
  }, []);

  return (
    <div>
      <div>My images</div>
      <Carousel autoPlay infiniteLoop width={700} thumbWidth={50}>
        {images.map((image) => (
          <div style={{ marginTop: "30%" }}>
            <img src={image.url} alt="Images" key={image.id}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyImages;
