"use client";
import React, { useState, useEffect } from "react";

export default function AssessmentTaken({ assessmentsInMonthYearCount}) {

    return (
        <div className="flex flex-col gap-12">
            <div className="right-0  bg-black p-3  text-white">
                <p className="block text-xs">{assessmentsInMonthYearCount}</p>
                <p className="block text-xs">Assessment Taken</p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#4c1ed7]"></div>
                    <p>Depression</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#d71e1e]"></div>
                    <p>Burn out</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#cbd71e]"></div>
                    <p>Anxiety</p>
                </div>
            </div>
        </div>
    );
}
