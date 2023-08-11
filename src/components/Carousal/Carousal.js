import React from "react";
import Card from "../Story_card/Card";
import data from "./data";
import "./carousal.css";

export default function Carousal() {
  return (
    <>
      <div className="carousal">
        {data.map((item) => (
          <Card
            heading={item.heading}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}
