import React from "react";

const button = (props) => {
  const { type, className, onClick, name } = props;
  return (
    <div>
      <button type={type} className={className} onClick={onClick}>
        {name}{" "}
      </button>
    </div>
  );
};

export default button;
