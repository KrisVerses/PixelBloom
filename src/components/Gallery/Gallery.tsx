import Masonry from "react-masonry-css";
import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import { useNavigate } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";

interface GalleryProps {
  breakpointCols: {
    default: number;
    1100: number;
    700: number;
  };
}

const Gallery: React.FC<GalleryProps> = ({ breakpointCols }) => {
  const { images, setSelectedImage } = useContext(StateContext);
  const navigate = useNavigate();

  const handleSelectedImage = (image) => {
    setSelectedImage({
      src: image.urls.regular,
      alt: image.alt_description,
      id: image.id,
      author: image.user.name,
      authorProfile: image.user.links.html,
      username: image.user.username,
      authorImage: image.user.profile_image.medium,
    });
    navigate(`/image/${image.slug}`);
  };

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="flex gap-4"
      columnClassName="flex flex-col gap-4"
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 * index }}
        >
          <img
            onClick={() => handleSelectedImage(image)}
            src={image.urls.small}
            alt={image.alt_description}
            className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 hover:transition-all"
          />
        </motion.div>
      ))}
    </Masonry>
  );
};
export default Gallery;
