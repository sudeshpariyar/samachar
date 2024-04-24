import React, { useEffect, useState } from "react";
import "./LifeTopics.css";
import lifetopicback from "../../asset/life-topic-background.jpg";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import { GoDotFill } from "react-icons/go";
import { INewsData } from "../../pages/homePage/HomePage";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomHeading from "../CustomHeading/CustomHeading";
import CustomButton from "../CustomButton/CustomButton";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useWindowWidthAndHeight from "../../customHooks/useWindowWidthAndHeight";

const LifeTopics = () => {
  const [lifeTopicNews, setLifeTopicNews] = useState<INewsData[]>([]);
  const [width, height] = useWindowWidthAndHeight();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&language=en&qInTitle=Life`
      );
      const newData = await response.json();
      if (newData.results.code === "RateLimitExceeded")
        setTimeout(fetchData, 2000);
      setLifeTopicNews(newData.results);
    };
    fetchData();
  }, []);
  const handleReadMore = (news: INewsData) => {
    navigate(`/blog/${news.article_id}`, { state: { news } });
  };
  return (
    <div className="life-topics-wrapper">
      <img
        className="life-topic-background"
        src={lifetopicback}
        alt="life-topic"
      />
      {lifeTopicNews.length && (
        <ComponentWrapper>
          <div className="life-topic-container">
            <div className="life-topic-header">
              <GoDotFill color="#6DEE68" size={30} />
              Life Topic
            </div>
            <CarouselProvider
              naturalSlideWidth={50}
              naturalSlideHeight={8}
              totalSlides={10}
            >
              <Slider>
                {lifeTopicNews.map((news, index) => (
                  <Slide index={index} key={news.article_id}>
                    <CustomHeading headingLevel={width > 750 ? "h1" : "h5"}>
                      {news.title.length > 100
                        ? news.title.substring(0, 99) + "..."
                        : news.title}
                    </CustomHeading>
                    <CustomButton
                      className={
                        width > 750
                          ? "life-topic-read-more"
                          : "mobile__readmore"
                      }
                      onClick={() => handleReadMore(news)}
                    >
                      Read More <MdOutlineArrowOutward />
                    </CustomButton>
                  </Slide>
                ))}
              </Slider>
              <div className="slide-buttons">
                <ButtonBack className="view-all-button">Previous</ButtonBack>
                <ButtonNext className="view-all-button">Next</ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </ComponentWrapper>
      )}
    </div>
  );
};

export default LifeTopics;
