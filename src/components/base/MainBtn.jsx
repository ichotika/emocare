"use client";
const MainBtn = ({ buttontext, bgColor, textColor, handleClick }) => {
  return (
    <button
      className={`${bgColor} rounded-lg p-3 ${textColor}`}
      onClick={handleClick}>
      {buttontext}
    </button>
  );
};

export default MainBtn;
