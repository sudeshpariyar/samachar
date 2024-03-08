import React from "react";
import "./CustomAllNews.css";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import CustomHeading from "../CustomHeading/CustomHeading";
import { INewsData } from "../../pages/homePage/HomePage";
import CustomAllNewsCard from "../CustomAllNewsCard/CustomAllNewsCard";

const CustomAllNews = ({ allNews }: { allNews: INewsData[] }) => {
  return (
    <ComponentWrapper>
      <CustomHeading headingLevel="h1">
        <div className="all-news-header">
          Read the latest news from around the world
        </div>
      </CustomHeading>
      <div className="all-news-wrapper">
        {allNews.length &&
          allNews.map((news) => (
            <CustomAllNewsCard news={news} key={news.article_id} />
          ))}
      </div>
    </ComponentWrapper>
  );
};

export default CustomAllNews;
