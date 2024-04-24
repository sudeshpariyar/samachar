import React, { useEffect, useState } from "react";
import { INewsData } from "../homePage/HomePage";
import CustomAllNews from "../../components/CustomAllNews/CustomAllNews";
import Loader from "../../components/Loader/Loader";

const CustomPages = ({
  category,
  query,
}: {
  category?: string;
  query?: string;
}) => {
  const [news, setNews] = useState<INewsData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        setNews([]);
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&language=en&category=${category}`
        );
        const newData = await response.json();
        setNews(newData.results);
      } else if (query) {
        setNews([]);
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&language=en&qInTitle=${query}`
        );
        const newData = await response.json();
        setNews(newData.results);
      } else {
        setNews([]);
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&language=en`
        );
        const newData = await response.json();
        setNews(newData.results);
      }
    };
    fetchData();
  }, [category, query]);
  return (
    <div>{news.length ? <CustomAllNews allNews={news} /> : <Loader />}</div>
  );
};

export default CustomPages;
