import React from "react";

interface QuestionInputProps {
  question: string;
  setQuestion: (question: string) => void;
}

export const QuestionInput: React.FC<QuestionInputProps> = ({ question, setQuestion }) => {
  return (
    <div className="question-input-container">
      <label htmlFor="question">请输入你的问题</label>
      <textarea
        id="question"
        className="question-input"
        placeholder="例如：我应该换工作吗？"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={4}
      />
    </div>
  );
};
