import React from "react";
import "./HotNews.css";
import CustomHeading from "../CustomHeading/CustomHeading";
import { FaCircle } from "react-icons/fa";
import CustomNewsCard from "../CustomNewsCard/CustomNewsCard";
import { INewsData } from "../../pages/homePage/HomePage";
import { useNavigate } from "react-router-dom";
import CustomTimeAgo from "../CustomTimeAgo/CustomTimeAgo";
import CustomCountryName from "../CustomCountryName/CustomCountryName";

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
            {hotNews[0]?.image_url ? (
              <img
                className="hot-news-image"
                src={hotNews[0]?.image_url}
                alt="hot-news"
              />
            ) : (
              <div className="hot-news-image-not-found">Image not found.</div>
            )}

            <div className="hot-news-description">
              <div className="topic-head">
                <FaCircle color="red" />
                <div>Hot Topic</div>
              </div>
              <CustomHeading headingLevel="h1">
                {hotNews[0]?.title}
              </CustomHeading>
              <CustomHeading headingLevel="h2" className="country-and-date">
                <CustomCountryName country={hotNews[0]?.country[0]} />,
                <CustomTimeAgo date={hotNews[0]?.pubDate as Date} />
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
              slicedHotNews.map((newsData: INewsData) => (
                <CustomNewsCard key={newsData.article_id} newsData={newsData} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HotNews;
