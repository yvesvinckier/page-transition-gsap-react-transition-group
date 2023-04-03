import React from "react";
import styled from "@emotion/styled";

const StyledCredit = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  z-index: 20;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  line-height: 2;
  color: #fff;
  mix-blend-mode: difference;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    margin-right: 10px;
    margin-left: 10px;
    display: inline-flex;
  }
`;

const Credits = () => {
  return (
    <StyledCredit>
      Images from Unsplash by{" "}
      <a
        href="https://unsplash.com/fr/photos/XHVpWcr5grQ"
        target="_Blank"
        rel="noreferrer"
      >
        Cesar
      </a>
      Images from Unsplash by{" "}
      <a
        href="https://unsplash.com/fr/photos/euZ2n8dGUcQ"
        target="_Blank"
        rel="noreferrer"
      >
        Florian
      </a>
    </StyledCredit>
  );
};

export default Credits;
