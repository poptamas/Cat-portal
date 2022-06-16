import React, { useEffect, useState } from "react";

const PublicImages = () => {
  const [number, setNumber] = useState(3);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);

  const getImgData = async (categoryId) => {
    let response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${number}&category_ids=${categoryId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-api-key": "709ca42e-10f2-465f-a296-07ffb1b5276a",
        },
      }
    );
    if (response.status !== 200) {
      const msg = `Something went wrong ${response.status}`;
      throw new Error(msg);
    }
    let rezult = await response.json();
    setImages(rezult);
  };

  const getCategories = async () => {
    let response = await fetch(`https://api.thecatapi.com/v1/categories`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "x-api-key": "709ca42e-10f2-465f-a296-07ffb1b5276a",
      },
    });
    if (response.status !== 200) {
      const msg = `Something went wrong ${response.status}`;
      throw new Error(msg);
    }
    let rezult = await response.json();
    setCategories(rezult);
  };

  const HandleNumber = (e) => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    getImgData();
    getCategories();
  }, []);

  return (
    <div>
      <div style={{ width: "100vw" }} className="text-center">
        <select
          style={{ marginTop: "100px" }}
          onChange={(e) => getImgData(e.target.value)}
        >
          {categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </select>
        <select
          style={{ marginTop: "100px" }}
          onChange={HandleNumber}
          aria-label="Default select example"
        >
          <option value="3">3</option>
          <option value="9">9</option>
          <option value="15">15</option>
        </select>
      </div>
      <div
        style={{ width: "100vw", position: "relative", zIndex: "-1" }}
        className="d-flex justify-content-center"
      >
        <div style={{ width: "70vw" }}>
          {images.map((publicimages) => (
            <img
              className="col-4 align-self-center"
              src={publicimages.url}
              value={publicimages.id}
              alt="Images"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicImages;
