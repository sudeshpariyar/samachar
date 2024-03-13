import React from "react";
import "./LatestReleaseCard.css";
import CustomButton from "../CustomButton/CustomButton";
import { MdOutlineArrowOutward } from "react-icons/md";
import CustomHeading from "../CustomHeading/CustomHeading";
import { INewsData } from "../../pages/homePage/HomePage";
import { useNavigate } from "react-router-dom";
import CustomTimeAgo from "../CustomTimeAgo/CustomTimeAgo";
import CustomCountryName from "../CustomCountryName/CustomCountryName";

const LatestReleaseCard = ({ data }: { data: INewsData }) => {
  let updatedDescription: string = "";
  const navigate = useNavigate();
  if (data.description?.length > 100) {
    updatedDescription = data.description.substring(0, 100) + "...";
  }

  const handleClick = () => {
    const news: INewsData = data;
    navigate(`/blog/${data.article_id}`, { state: { news } });
  };
  return (
    <div className="latest-release-card-wrapper">
      <div>
        {data.image_url ? (
          <img
            className="latest-release-image"
            src={data.image_url}
            alt="news"
          />
        ) : (
          <div className="latest-release-image-not-found">Image not found.</div>
        )}
      </div>

      <div>
        <div className="country-and-date">
          <CustomCountryName country={data.country[0]} />,
          <CustomTimeAgo date={data.pubDate as Date} />
        </div>
        <CustomHeading headingLevel="h3">{data.title}</CustomHeading>
        <div className="hot-topic-description">
          {updatedDescription ? (
            <span>{updatedDescription}</span>
          ) : (
            <span>{data.description}</span>
          )}
        </div>
        <CustomButton className="read-more-button" onClick={handleClick}>
          Read More
          <MdOutlineArrowOutward />
        </CustomButton>
      </div>
    </div>
  );
};

export default LatestReleaseCard;
