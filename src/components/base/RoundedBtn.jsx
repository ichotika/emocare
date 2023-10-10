"use client";
function RoundedBtn({ buttontext, bgColor, textColor, handleClick }) {
  return (
    <button
      className={`${bgColor} rounded-full p-3 ${textColor}`}
      onClick={handleClick}>
      {buttontext}
    </button>
  );
}

export default RoundedBtn;
