import "./Intro.scss";
import { init } from "ityped";

import { useEffect, useRef } from "react";
const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    let observedvalue = null;

    if (textRef.current) {
      observedvalue = textRef.current;
    }
    return () => {
      init(observedvalue, {
        showCursor: true,
        backDelay: 1500,

        strings: ["Developer", "Designer"],
      });
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={"/assests/me1.png"} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there ,I am</h2>
          <h1>Anwesha Banerjee</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>

          <a href="#portfolio">
            <img src={process.env.PUBLIC_URL + "/assests/down.png"} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
