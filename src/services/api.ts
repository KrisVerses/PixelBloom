import axios from "axios"; //import axios for making HTTP requests
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; //import the access key from the environment variables

//getRandomImages is an asynchronous function that takes a count as an argument
export const getRandomImages = async (count: number) => {
  //await the response from the Unsplash API call getting the number of photos specified by count
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

//
export const searchImages = async (query: string) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=25`,
    {
      headers: {
        Authorization: accessKey ? `Client-ID ${accessKey}` : "",
      },
    }
  );
  return response.data;
};
