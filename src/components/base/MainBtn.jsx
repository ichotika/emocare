"use client";
const MainBtn = ({ buttontext, bgColor, textColor, handleClick }) => {
    return (
        <button
            className={`${bgColor} rounded-lg p-2 ${textColor}`}
            onClick={handleClick}
        >
            {buttontext}
        </button>
    );
};

export default MainBtn;
