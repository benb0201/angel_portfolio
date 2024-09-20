import React, { useState } from "react";
import classes from "../styles/VideoAnalytics.module.css";

const VideoAnalytics = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const { videoUrl, views, shares, comments, saves } = videos[currentIndex];

  return (
    <div className={classes.carouselContainer}>
      <button className={classes.arrowButton} onClick={handlePrev}>
        {"<"}
      </button>
      <div className={classes.videoAnalyticsContainer}>
        <div className={classes.videoContainer}>
          <iframe
            src={videoUrl}
            className={classes.responsiveIframe}
            height="450"
            frameBorder="0"
            allowFullScreen
            title="Promotional Video"
          ></iframe>
        </div>

        <div className={classes.analyticsContainer}>
          <p>Views: {views}</p>
          <p>Shares: {shares}</p>
          <p>Comments: {comments}</p>
          <p>Saves: {saves}</p>
        </div>
      </div>
      <button className={classes.arrowButton} onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

export default VideoAnalytics;
