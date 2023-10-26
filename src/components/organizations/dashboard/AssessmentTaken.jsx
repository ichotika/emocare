"use client";
import React from "react";

export default function AssessmentTaken() {
    return (
        <div className="flex flex-col gap-12">
            <div className="right-0  bg-black p-3  text-white">
                <p className="block text-xs">150</p>
                <p className="block text-xs">Assessment Taken</p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#50d71e]"></div>
                    <p>Depression</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#50d71e]"></div>
                    <p>Depression</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#50d71e]"></div>
                    <p>Depression</p>
                </div>
            </div>
        </div>
    );
}
