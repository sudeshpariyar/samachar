import React, { useEffect, useState } from "react";
import "./HomePage.css";
import HotNews from "../../components/HotNews/HotNews";
import LatestRelease from "../../components/LatestRelease/LatestRelease";
import ComponentWrapper from "../../components/ComponentWrapper/ComponentWrapper";

export interface INewsData {
  article_id: string;
  image_url: string;
  country: string[];
  title: string;
  pubDate: string;
  description: string;
  category: string[];
  source_icon: string;
  source_id: string;
}
const HomePage = () => {
  const [hotNews, setHotNews] = useState<INewsData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&language=en`
      );
      const newData = await response.json();
      setHotNews(newData.results);
    };
    fetchData();
  }, []);
  return (
    <div className="homepage-wrapper">
      <ComponentWrapper>
        <HotNews hotNews={hotNews} />
        <LatestRelease latestNews={hotNews} />
      </ComponentWrapper>
    </div>
  );
};

export default HomePage;
