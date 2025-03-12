import React, { useState } from "react";
import { StateContext } from "../context/StateContext";
import { searchImages } from "../services/api";

const StateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    searchImages(query).then((images) => {
      setImages(images.results);
    });
  };

  const state = {
    selectedImage,
    setSelectedImage,
    images,
    setImages,
    handleSearch,
  };
  return (
    // StateContext.Provider is used to provide the state to the children components
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};
export default StateProvider;
