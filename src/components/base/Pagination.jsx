"use client";
import { useState } from "react";
import leftIcon from "@/public/icons/left.svg";
import rightIcon from "@/public/icons/right.svg";
import Image from "next/image";

function Pagination({ dataArr, max, curNumber, setCurNumber }) {
    const lengthArr = [];
    const totalLength = Math.ceil(dataArr.length / max);
    for (let i = 0; i < totalLength; i++) {
        lengthArr.push(i + 1);
    }
    function handleNext() {
        if (curNumber != totalLength) setCurNumber(curNumber + 1);
    }
    function handlePrev() {
        if (curNumber > 1) setCurNumber(curNumber - 1);
    }
    function handleNum(num) {
        setCurNumber(num);
    }
    return (
        <div className="flex items-center justify-center">
            <div
                className="me-3 flex cursor-pointer items-center justify-center gap-3"
                onClick={() => {
                    handlePrev();
                }}
            >
                <Image src={leftIcon} alt="left icon" />
                <p>Previous</p>
            </div>
            {lengthArr.map((item) =>
                item === curNumber ? (
                    <div
                        className="flex items-center justify-center  rounded bg-blue-500  font-bold text-white"
                        key={item}
                        style={{ width: 40, height: 40 }}
                    >
                        {item}
                    </div>
                ) : (
                    <div
                        className="flex cursor-pointer items-center  justify-center rounded"
                        key={item}
                        style={{ width: 40, height: 40 }}
                        onClick={(e) => {
                            handleNum(Number(e.target.textContent));
                        }}
                    >
                        {item}
                    </div>
                )
            )}
            <div
                className="ms-3 flex cursor-pointer items-center justify-center gap-3"
                onClick={() => handleNext()}
            >
                <p>Next</p>
                <Image src={rightIcon} alt="right icon" />
            </div>
        </div>
    );
}

export default Pagination;
