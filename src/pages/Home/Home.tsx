import React, { useContext, useEffect } from "react";
import { getRandomImages } from "../../services/api";
import Gallery from "../../components/Gallery/Gallery";
import { StateContext } from "../../context/StateContext";

const Home: React.FC = () => {
  const { images, setImages } = useContext(StateContext);

  useEffect(() => {
    if (images.length === 0) {
      getRandomImages(20).then((images) => {
        setImages(images);
      });
    }
  }, []);

  const breakpointCols = {
    default: 5, // 4 columns by default
    1100: 3, // 2 columns below 1100px
    700: 1, // 1 column below 700px
  };

  return (
    <div className="bg-gray-100 p-4">
      <Gallery images={images} breakpointCols={breakpointCols} />
    </div>
  );
};

export default Home;
