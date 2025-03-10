import axios from "axios";
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const getRandomImages = async (count: number) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/random?count=${count}`,
    {
      headers: {
        Authorization: accessKey ? `Client-ID ${accessKey}` : "",
      },
    }
  );
  return response.data;
};
