"use client";
import Link from "next/link";

const MainBtn = ({
    buttontext,
    bgColor,
    textColor,
    handleClick,
    link,
    borderColor,
}) => {
    // console.log(link)
    return (
        <button
            className={`${bgColor} rounded p-2 ${textColor} text-medium px-9 py-2 text-b-sm ${borderColor}`}
            onClick={handleClick}
        >
            {link ? <Link href={link}>{buttontext}</Link> : <>{buttontext}</>}
        </button>
    );
};

export default MainBtn;
