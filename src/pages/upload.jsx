import React from "react";
import { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState("");

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    console.log(selectedFile);
    formData.append("file", selectedFile);
    fetch(
      "https://api.thecatapi.com/v1/images/upload?api_key=709ca42e-10f2-465f-a296-07ffb1b5276a",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-secondary">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          className="bg-dark pt-5 pl-5 pr-5 pb-4 rounded d-flex flex-column col col-sm-5"
          style={{ width: "50vw" }}
        >
          <label className="form-label align-self-center">
            <h3 className="text-light pb-3">
              <b>Upload an image</b>
            </h3>
          </label>
          <input
            className="form-control form-control p-1"
            type="file"
            name="file"
            id="formFile"
            onChange={changeHandler}
          ></input>

          <button
            className="btn btn-light ml-auto mt-4"
            onClick={handleSubmission}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
