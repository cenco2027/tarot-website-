import React from "react";
import { useState } from "react";
import {
  Header,
  Intro,
  QuestionInput,
  ErrorMessage,
  DrawButton,
  CardSpread,
  Interpretation,
  ResetButton,
} from "./components";
import { drawThreeCards, type DrawResultItem } from "./utils/drawLogic";
import {
  generateInterpretation,
  type InterpretationResult,
} from "./utils/interpretationLogic";
import "./styles/App.css";

export const App: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState(false);
  const [isDrawn, setIsDrawn] = useState(false);
  const [cards, setCards] = useState<DrawResultItem[]>([]);
  const [interpretation, setInterpretation] = useState<InterpretationResult | null>(
    null,
  );

  const handleDraw = () => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setError(true);
      setIsDrawn(false);
      setCards([]);
      setInterpretation(null);
      return;
    }

    const drawResult = drawThreeCards();
    const interpretationResult = generateInterpretation(
      trimmedQuestion,
      drawResult,
    );

    setError(false);
    setCards(drawResult);
    setInterpretation(interpretationResult);
    setIsDrawn(true);
  };

  const handleReset = () => {
    setQuestion("");
    setError(false);
    setIsDrawn(false);
    setCards([]);
    setInterpretation(null);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Intro />
        <QuestionInput question={question} setQuestion={setQuestion} />
        <ErrorMessage error={error} />
        <DrawButton question={question} handleDraw={handleDraw} />
        <CardSpread cards={cards} />
        <Interpretation interpretation={interpretation} />
        {isDrawn && <ResetButton handleReset={handleReset} />}
      </main>
    </div>
  );
};

export default App;
