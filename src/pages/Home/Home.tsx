import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { getRandomImages } from "../../services/api";

const Home: React.FC = () => {
  const [images, setImages] = React.useState<any[]>([]);

  useEffect(() => {
    getRandomImages(10).then((images) => {
      setImages(images);
    });
  }, []);

  const breakpointCols = {
    default: 3, // 3 columns by default
    1100: 2, // 2 columns below 1100px
    700: 1, // 1 column below 700px
  };

  return (
    <div className="bg-gray-100 p-4">
      <Masonry
        breakpointCols={breakpointCols}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Home;
