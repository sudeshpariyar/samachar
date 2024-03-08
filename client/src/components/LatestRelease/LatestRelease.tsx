import React from "react";
import "./LatestRelease.css";
import CustomHeading from "../CustomHeading/CustomHeading";
import CustomButton from "../CustomButton/CustomButton";
import { MdOutlineArrowOutward } from "react-icons/md";
import LatestReleaseCard from "../LatestReleaseCard/LatestReleaseCard";
import { INewsData } from "../../pages/homePage/HomePage";
import { useNavigate } from "react-router-dom";

const LatestRelease = ({ latestNews }: { latestNews: INewsData[] }) => {
  const slicedLatestNews = latestNews.slice(5, 7);
  let updatedNewsDescription = "";
  const navigate = useNavigate();
  if (latestNews[4]?.description?.length > 200) {
    updatedNewsDescription =
      latestNews[4]?.description.substring(0, 199) + "...";
  }
  const handleClick = () => {
    navigate("/allnews");
  };
  const handleHotTopic = () => {
    const news: INewsData = latestNews[4];
    navigate(`/blog/${latestNews[4].article_id}`, { state: { news } });
  };
  return (
    <div className="latest-release-wrapper">
      <div className="latest-release-header">
        <CustomHeading headingLevel="h1">Latest Release</CustomHeading>
        <CustomButton className="view-all-button" onClick={handleClick}>
          View All
        </CustomButton>
      </div>
      <div className="latest-release-content">
        {latestNews && (
          <div className="hot-topic-item">
            <img
              className="latest-release-main-image"
              src={latestNews[4]?.image_url}
              alt="latest-release"
            />
            <CustomButton className="hot-topic-button">Hot Topic</CustomButton>
            <CustomHeading headingLevel="h3">
              {latestNews[4]?.title}
            </CustomHeading>
            <div className="hot-topic-description">
              {updatedNewsDescription ? (
                <span>{updatedNewsDescription}</span>
              ) : (
                <span>{latestNews[4]?.description}</span>
              )}
            </div>
            <CustomButton className="read-more-button" onClick={handleHotTopic}>
              Read More
              <MdOutlineArrowOutward />
            </CustomButton>
          </div>
        )}
        <div className="latest-release-right-content">
          {slicedLatestNews &&
            slicedLatestNews.map((data: any) => (
              <LatestReleaseCard data={data} key={data.article_id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestRelease;
