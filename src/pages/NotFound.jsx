import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h3>Not found page</h3>
      <button onClick={handleBackToHome}>Back to home</button>
    </div>
  );
}
