import React, { useContext, useEffect } from "react";
import { getRandomImages, searchImages } from "../../services/api";
import Gallery from "../../components/Gallery/Gallery";
import { StateContext } from "../../context/StateContext";
import InfiniteScroll from "react-infinite-scroll-component";

const Home: React.FC = () => {
  const { images, setImages, query, page, setPage } = useContext(StateContext);

  useEffect(() => {
    if (images.length === 0) {
      getRandomImages(20).then((images) => {
        setImages(images);
      });
    }
  }, [images.length, setImages, query]);

  const fetchMoreImages = () => {
    if (query === "") {
      getRandomImages(20).then((images) => {
        setImages((prev) => [...prev, ...images]);
      });
    } else {
      setPage((prev) => prev + 1);
      searchImages(query, page).then((pics) => {
        setImages((prev) => [...prev, ...pics.results]);
      });
    }
  };

  const breakpointCols = {
    default: 5, // 4 columns by default
    1100: 3, // 2 columns below 1100px
    700: 1, // 1 column below 700px
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchMoreImages}
      hasMore={true}
      loader={<p className="text-center text-gray-500">Loading more...</p>}
    >
      {" "}
      <Gallery images={images} breakpointCols={breakpointCols} />
    </InfiniteScroll>
  );
};

export default Home;
