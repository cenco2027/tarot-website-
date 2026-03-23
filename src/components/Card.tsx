import React from "react";

interface CardProps {
  name: string;
  nameCn: string;
  image: string;
  reversed: boolean;
  position: string;
}

export const Card: React.FC<CardProps> = ({ name, nameCn, image, reversed, position }) => {
  const positionLabel = {
    past: "过去",
    present: "现在",
    future: "未来",
  }[position] || position;

  return (
    <div className="card">
      <div className={`card-image ${reversed ? "reversed" : ""}`}>
        <img src={image} alt={nameCn} />
      </div>
      <div className="card-info">
        <p className="card-position">{positionLabel}</p>
        <p className="card-name">{nameCn}</p>
        <p className="card-status">{reversed ? "逆位" : "正位"}</p>
      </div>
    </div>
  );
};
