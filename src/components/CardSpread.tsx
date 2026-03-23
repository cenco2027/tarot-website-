import React from "react";
import { Card } from "./Card";
import type { DrawResultItem } from "../utils/drawLogic";

interface CardSpreadProps {
  cards: DrawResultItem[];
}

export const CardSpread: React.FC<CardSpreadProps> = ({ cards }) => {
  if (cards.length === 0) return null;

  return (
    <section className="card-spread">
      <h2>牌阵展示</h2>
      <div className="cards-container">
        {cards.map((cardData) => (
          <Card
            key={cardData.position}
            name={cardData.card.name}
            nameCn={cardData.card.nameCn}
            image={cardData.card.image}
            reversed={cardData.reversed}
            position={cardData.position}
          />
        ))}
      </div>
    </section>
  );
};
