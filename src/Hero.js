import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const { content } = useSelector((state) => state.lang);
  const theme = useSelector((state) => state.theme);

  return (
    <div className={
      theme === "dark" ? "bg-black text-white" : "bg-white text-black"
    }>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">{content.title}</h1>
        <p className="text-center mt-4">
          {content.content}
        </p>
      </div>
    </div>
  );
};

export default Hero;
