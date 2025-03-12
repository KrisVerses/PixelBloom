import React, { useContext } from "react";
import { StateContext } from "../context/StateContext"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";

const ImageDetail: React.FC = () => {
  const { selectedImage } = useContext(StateContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="w-full bg-gray-100 p-4">
      <div>
        <div className="flex items-center space-x-4 mb-4">
          <img
            className="rounded-full"
            src={selectedImage.authorImage}
            alt={`${selectedImage.username}'s profile image`}
          />
          <p>{selectedImage.author}</p>
        </div>
        <button
          onClick={goBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Go Back
        </button>
      </div>
      <figure className="max-w-2xl mx-auto mb-20 bg-white rounded-lg shadow-md p-4">
        <img
          src={selectedImage.src}
          alt="Selected"
          className="rounded-lg shadow-lg"
        />
        <figcaption className="justify-center mt-2 space-x-5 text-center text-gray-70">
          <p>{selectedImage.alt}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default ImageDetail;
