import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import "./social.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/anwesha-banerjee-6a768a225/"
        className="home__social-icon"
      >
        <LinkedIn />
      </a>

      <a
        href="https://twitter.com/Anwesha59373116?t=a2PANx6HlR9FqSxMRgaBsg&s=08"
        className="home__social-icon"
      >
        <Twitter />
      </a>

      <a
        href="https://github.com/anweshabanerjee10"
        className="home__social-icon"
      >
        <GitHub />
      </a>
    </div>
  );
};

export default Social;
