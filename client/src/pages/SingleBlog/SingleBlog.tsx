import React from "react";
import "./SingleBlog.css";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { INewsData } from "../homePage/HomePage";
import ComponentWrapper from "../../components/ComponentWrapper/ComponentWrapper";
import CustomTimeAgo from "../../components/CustomTimeAgo/CustomTimeAgo";
import CustomCountryName from "../../components/CustomCountryName/CustomCountryName";

const SingleBlog = ({ data }: { data: any }) => {
  const { news }: { news: INewsData } = data;
  return (
    <div>
      {data.news && (
        <div>
          <ComponentWrapper>
            <div className="single-blog-header-wrapper">
              <CustomHeading headingLevel="h1"> {news.title}</CustomHeading>
              <CustomHeading headingLevel="h3" className="country-and-date">
                <CustomCountryName country={`${news.country[0]},`} />
                <CustomTimeAgo date={news.pubDate as Date} />
              </CustomHeading>
            </div>
          </ComponentWrapper>
          <div>
            {news.image_url && (
              <img
                src={news.image_url}
                alt="Single Blog"
                className="single-blog-image"
              />
            )}
          </div>
          <ComponentWrapper>
            <div>
              <CustomHeading headingLevel="h5">
                <span className="single-blog-description">
                  {news.description}
                </span>
              </CustomHeading>
              <div>
                {news.source_icon && (
                  <img
                    src={news.source_icon}
                    alt="source-icon"
                    className="news-source-icon"
                  />
                )}

                <CustomHeading headingLevel="h6">
                  {news.source_id}
                </CustomHeading>
              </div>
            </div>
          </ComponentWrapper>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
