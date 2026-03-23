import React from "react";

interface ResetButtonProps {
  handleReset: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ handleReset }) => {
  return (
    <button className="reset-button" onClick={handleReset} type="button">
      重新开始
    </button>
  );
};
