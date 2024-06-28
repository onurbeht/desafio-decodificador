import React from "react";

const Button = ({ onClick, style, children }) => {
  return (
    <button className={style} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
