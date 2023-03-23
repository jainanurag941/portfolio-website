import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { skills } from "../constants";

const Tech = ({ isMobile }) => {
  console.log(isMobile);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {!isMobile &&
        technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      {isMobile &&
        skills.map((skill) => (
          <div className="w-28 h-28" key={skill.name}>
            <BallCanvas icon={skill.icon} />
          </div>
        ))}
    </div>
  );
};

const MediaQueryAdjustScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return <Tech isMobile={isMobile} />;
};

export default SectionWrapper(MediaQueryAdjustScreen, "");
