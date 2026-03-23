import type { DrawResultItem } from "./drawLogic";

const POSITION_LABEL: Record<DrawResultItem["position"], string> = {
  past: "过去",
  present: "现在",
  future: "未来",
};

interface InterpretationCardItem {
  position: DrawResultItem["position"];
  positionLabel: string;
  cardName: string;
  orientation: "正位" | "逆位";
  meaning: string;
}

export interface InterpretationResult {
  question: string;
  cards: InterpretationCardItem[];
  summary: string;
}

export function generateInterpretation(
  question: string,
  cards: DrawResultItem[],
): InterpretationResult {
  const interpretationCards: InterpretationCardItem[] = cards.map((item) => {
    const positionLabel = POSITION_LABEL[item.position];
    const meaning = item.reversed
      ? item.card.meaningReversed
      : item.card.meaningUpright;
    const orientation: "正位" | "逆位" = item.reversed ? "逆位" : "正位";

    return {
      position: item.position,
      positionLabel,
      cardName: item.card.nameCn,
      orientation,
      meaning,
    };
  });

  const summary = `围绕"${question}"，过去能量已形成基础，现在处于关键调整期，未来趋势将随着你的选择逐步展开。建议先看清当下重点，再稳步行动。`;

  return {
    question,
    cards: interpretationCards,
    summary,
  };
}
