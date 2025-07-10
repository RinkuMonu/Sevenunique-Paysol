import React from "react";

const LoginModal = ({ onLogin }) => {
  return (
    <div style={modalStyle}>
      <h2>Login Required</h2>
      <button onClick={onLogin}>Click to Login</button>
    </div>
  );
};

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  padding: "20px",
  zIndex: 999,
  border: "1px solid #ccc",
  borderRadius: "8px",
};

export default LoginModal;
