import React from "react";
import Fade from "./animation/Fade";

const Title = ({ title }) => {
  return (
    <>
      <Fade direction="down" delay={0.2}>
        <p className="text-3xl font-semibold text-white">{title}</p>
      </Fade>
    </>
  );
};

export default Title;
