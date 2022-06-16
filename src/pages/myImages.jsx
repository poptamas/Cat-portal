import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MyImages = () => {
  const [images, setImages] = useState([]);

  const showImages = async () => {
    let res = await fetch(`https://api.thecatapi.com/v1/images/?limit=20&`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "x-api-key": "709ca42e-10f2-465f-a296-07ffb1b5276a",
      },
    });
    let pictures = await res.json();
    setImages(pictures);
  };

  const HandleClick = async (image_id) => {
    let response = await fetch(`https://api.thecatapi.com/v1/images/${image_id} `,{
      method:"DELETE",
      headers: {
        Accept: "application/json",
        "x-api-key": "709ca42e-10f2-465f-a296-07ffb1b5276a",
      },
    })
    if(response.status === 200) {
    showImages(images)
  }
  }

  useEffect(() => {
    showImages();
  }, []);

  return (
    <div style={{width:"100vw"}}>
      <div>My images</div>
      <Carousel autoPlay infiniteLoop width={500} thumbWidth={30}>
        {images.map((image) => (
          <div style={{ marginTop: "10%", height:"600px" }}>
            <img src={image.url} alt="Images" key={image.id}/>
            <button style={{zIndex: "1"}} className="mt-5"
            onClick={() => HandleClick(image.id)}
            >Delete</button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyImages;
