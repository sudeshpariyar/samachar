import React from "react";
import ReactTimeAgo from "react-time-ago";
import "./CustomTimeAgo.css";

const CustomTimeAgo = ({ date }: { date: Date }) => {
  return (
    <ReactTimeAgo className="custom-time-ago" date={date} locale="en-US" />
  );
};

export default CustomTimeAgo;
