import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getNewsAction } from "@components/Redux/Actions/getNewsActions";
import { Card } from "./styles";

interface NewsStateProps {
  news: {
    loading: boolean;
    results: any;
  };
}

const News: React.FC = () => {
  const response = useSelector((state: NewsStateProps) => state.news);
  const dispatch = useDispatch();

  const loadNews = () => {
    dispatch(getNewsAction());
  };

  useEffect(() => {
    loadNews();
  }, []);

  console.log(response.results);
  return (
    <div className="container">
      <h1 className="mb-5">News page</h1>
      {response?.loading ? (
        <p>Loading news...</p>
      ) : (
        <div className="d-flex flex-row flex-wrap">
          {response.results &&
            !!response.results.length &&
            response.results.map((item, i) => (
              <Card className="card mb-5" key={item.id}>
                <img
                  className="card-img-top"
                  src={item.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <a href={item.url} className="btn btn-primary">
                    read more
                  </a>
                </div>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
};

export default News;
