import React, { useEffect } from "react";
import { getRandomImages } from "../services/api";
import "../styles.css";

//declare the component as a functional component in TypeScript
const Home: React.FC = () => {
  const [images, setImages] = React.useState<any>([]);
  useEffect(() => {
    getRandomImages(10).then((images) => {
      setImages(images);
    });
  }, []);

  return (
    <div className="masonry-grid">
      {images.map((image: any) => (
        <div key={image.id} className="masonry-item">
          <img src={image.urls.small} alt={image.alt_description} />
        </div>
      ))}
    </div>
  );
};
export default Home;
