import React from "react";

interface DrawButtonProps {
  question: string;
  handleDraw: () => void;
}

export const DrawButton: React.FC<DrawButtonProps> = ({ question, handleDraw }) => {
  return (
    <button
      className="draw-button"
      onClick={handleDraw}
      type="button"
      data-has-question={question.trim().length > 0}
    >
      开始占卜
    </button>
  );
};
