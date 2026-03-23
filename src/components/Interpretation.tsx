import React from "react";
import type { InterpretationResult } from "../utils/interpretationLogic";

interface InterpretationProps {
  interpretation: InterpretationResult | null;
}

export const Interpretation: React.FC<InterpretationProps> = ({ interpretation }) => {
  if (!interpretation) return null;

  return (
    <section className="interpretation">
      <h2>解读</h2>
      <div className="interpretation-content">
        <p className="interpretation-question">问题：{interpretation.question}</p>
        {interpretation.cards.map((item) => (
          <p key={item.position}>
            {item.positionLabel}：{item.cardName}（{item.orientation}）- {item.meaning}
          </p>
        ))}
        <p className="interpretation-summary">综合：{interpretation.summary}</p>
      </div>
    </section>
  );
};
