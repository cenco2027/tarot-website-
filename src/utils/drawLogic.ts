import { tarotCards, type TarotCard } from "../data/tarotCards";

export type DrawPosition = "past" | "present" | "future";

export interface DrawResultItem {
  position: DrawPosition;
  card: TarotCard;
  reversed: boolean;
}

const DRAW_POSITIONS: DrawPosition[] = ["past", "present", "future"];

function shuffleCards(cards: TarotCard[]): TarotCard[] {
  const shuffled = [...cards];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function randomReversed(): boolean {
  return Math.random() < 0.5;
}

export function drawThreeCards(): DrawResultItem[] {
  const shuffledCards = shuffleCards(tarotCards);
  const selectedCards = shuffledCards.slice(0, 3);

  return selectedCards.map((card, index) => ({
    position: DRAW_POSITIONS[index],
    card,
    reversed: randomReversed(),
  }));
}
