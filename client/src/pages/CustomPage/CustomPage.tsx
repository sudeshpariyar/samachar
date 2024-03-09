import React, { useEffect, useState } from "react";
import { INewsData } from "../homePage/HomePage";
import CustomAllNews from "../../components/CustomAllNews/CustomAllNews";

const CustomPages = ({
  category,
  query,
}: {
  category?: string;
  query?: string;
}) => {
  console.log("searchState custom pages", query);
  const [news, setNews] = useState<INewsData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&language=en&category=${category}`
        );
        const newData = await response.json();
        setNews(newData.results);
      } else if (query) {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&language=en&qInTitle=${query}`
        );
        const newData = await response.json();
        setNews(newData.results);
      } else {
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
    <div>
      <CustomAllNews allNews={news} />
    </div>
  );
};

export default CustomPages;
