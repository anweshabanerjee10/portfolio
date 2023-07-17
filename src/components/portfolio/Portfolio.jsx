import "./Portfolio.scss";
import PortFolioList from "../portFolioList/portFolioList";

import { useState, useEffect } from "react";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  useEffect(() => {
    return () => {
      switch (selected) {
        case "featured":
          setData(featuredPortfolio);
          break;
        case "web":
          setData(webPortfolio);
          break;
        case "mobile":
          setData(mobilePortfolio);
          break;

        case "design":
          setData(designPortfolio);
          break;

        default:
          setData(featuredPortfolio);
          break;
      }
    };
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <li>
            <PortFolioList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          </li>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
