import axios from "axios";

export const getNewsService = () => {
  const newsApiLink = "https://rickandmortyapi.com/api/character";
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  };

  return axios
    .get(newsApiLink, config)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
