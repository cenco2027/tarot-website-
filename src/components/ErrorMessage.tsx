import React from "react";

interface ErrorMessageProps {
  error: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="error-message">
      <p>请输入你的问题后再开始占卜</p>
    </div>
  );
};
