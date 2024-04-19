import React from "react";

const DisclaimerMarquee = ({ content }) => {
  return (
    <div style={{ background: "yellow" }}>
      <div style={{ padding: "5px" }}>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>{content}</span>
      </div>
    </div>
  );
};

export default DisclaimerMarquee;
