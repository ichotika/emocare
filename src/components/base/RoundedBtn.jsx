"use client";
function RoundedBtn({ buttontext, bgColor, textColor, handleClick }) {
  return (
    <button
      className={`${bgColor} rounded-3xl p-1 ps-4 pe-4 ${textColor}`}
      onClick={handleClick}>
      {buttontext}
    </button>
  );
}

export default RoundedBtn;
