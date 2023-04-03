import React from "react";

import imgBG from "../images/cesar-rincon-XHVpWcr5grQ-unsplash.jpg";
import Twitter from "../components/Twitter";
import Credits from "../components/Credits";

const imgStyle = {
  backgroundImage: `url(${imgBG})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  overflow: "hidden",
};

const Home = () => {
  return (
    <>
      <div style={imgStyle} />
      <a
        href="https://twitter.com/NowMoDesign/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          bottom: 40,
          left: "4vw",
          width: 50,
          mixBlendMode: "difference",
        }}
      >
        <Twitter />
      </a>
      <Credits />
    </>
  );
};

export default Home;
