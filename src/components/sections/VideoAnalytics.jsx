import React from "react";
import classes from "../styles/VideoAnalytics.module.css";

const VideoAnalytics = ({ videoUrl, views, shares, comments, saves }) => {
  return (
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
  );
};

export default VideoAnalytics;
