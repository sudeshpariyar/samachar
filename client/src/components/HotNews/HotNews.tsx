import React from "react";
import "./HotNews.css";
import CustomHeading from "../CustomHeading/CustomHeading";
import { FaCircle } from "react-icons/fa";
import CustomNewsCard from "../CustomNewsCard/CustomNewsCard";
import { INewsData } from "../../pages/homePage/HomePage";
import { useNavigate } from "react-router-dom";

const HotNews = ({ hotNews }: { hotNews: INewsData[] }) => {
  const slicedHotNews = hotNews?.slice(1, 4);
  const navigate = useNavigate();
  const handleClick = () => {
    const news = hotNews[0];
    navigate(`/blog/${hotNews[0].article_id}`, { state: { news } });
  };
  return (
    <div className="hot-side-news">
      {hotNews.length && (
        <div>
          <div className="hot-news-wrapper">
            <img
              className="hot-news-image"
              src={hotNews[0]?.image_url}
              alt="hot-news"
            />
            <div className="hot-news-description">
              <div className="topic-head">
                <FaCircle />
                <div>Hot Topic</div>
              </div>
              <CustomHeading headingLevel="h1">
                {hotNews[0]?.title}
              </CustomHeading>
              <CustomHeading headingLevel="h3">
                {hotNews[0]?.country[0]}, {hotNews[0]?.pubDate}
              </CustomHeading>
              <CustomHeading headingLevel="p">
                <span style={{ cursor: "pointer" }} onClick={handleClick}>
                  Read More...
                </span>
              </CustomHeading>
            </div>
          </div>
          <div className="side-news-wrapper">
            {slicedHotNews &&
              slicedHotNews.map((newsData: any) => (
                <CustomNewsCard
                  key={newsData.article_id}
                  imageURL={newsData.image_url}
                  location={newsData.country[0]}
                  title={newsData.title}
                  date={newsData.pubDate}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HotNews;
