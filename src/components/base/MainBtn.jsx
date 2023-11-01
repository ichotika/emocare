"use client";
import Link from "next/link";

const MainBtn = ({ buttontext, bgColor, textColor, handleClick, link }) => {
    // console.log(link)
    return (
        <button
            className={`${bgColor} rounded-lg p-2 ${textColor}`}
            onClick={handleClick}
        >
            {link ? <Link href={link}>{buttontext}</Link>
                  : <>{buttontext}</>}
        </button>
    );
};

export default MainBtn;
