"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import BadCondition from "@/public/assets/organization/Decline.gif";
import GoodCondition from "@/public/assets/organization/Growth.gif";
import MedCondition from "@/public/assets/organization/Normal.gif";
import RecordTable from "@/components/organizations/RecordTable";
function AssessmentRecords({ emplist, prevObj, curObj }) {
    const compareObj = {
        difGood: (
            (curObj.good / curObj.total - prevObj.good / prevObj.total) *
            100
        ).toFixed(1),
        difDecent: (
            (curObj.decent / curObj.total - prevObj.decent / prevObj.total) *
            100
        ).toFixed(1),
        difCritical: (
            (curObj.critical / curObj.total -
                prevObj.critical / prevObj.total) *
            100
        ).toFixed(1),
    };
    return (
        <>
            <div className="flex gap-5">
                <div className="border-p-blue-5 flex grow gap-5 rounded-xl border border-solid p-7 shadow-md">
                    <div className="flex flex-col gap-1">
                        <p className="block text-start text-b-lg font-semibold">
                            Good Condition
                        </p>
                        <h3 className="block text-start text-h-2xl font-bold">
                            {((curObj.good / curObj.total) * 100).toFixed(1)}%
                        </h3>

                        <h3 className="block text-start text-sm font-semibold">
                            <span className="text-b-xs font-medium text-p-blue-1">
                                {compareObj.difGood}%
                            </span>
                            <span className="ps-1 text-b-xs font-medium text-g-gray-1">
                                vs last month
                            </span>
                        </h3>
                    </div>
                    <Image
                        src={GoodCondition}
                        alt="good condition"
                        className="-rotate-90"
                        height={100}
                        width={100}
                    />
                </div>
                <div className="border-p-blue-5 flex grow gap-5 rounded-xl border border-solid p-7 shadow-md">
                    <div className="flex flex-col gap-1">
                        <p className="block text-start text-b-lg font-semibold">
                            Moderate Condition
                        </p>
                        <h3 className="block text-start text-h-2xl font-bold">
                            {((curObj.decent / curObj.total) * 100).toFixed(1)}%
                        </h3>

                        <h3 className="block text-start text-sm font-semibold">
                            <span className="text-b-xs font-medium text-p-blue-1">
                                {compareObj.difDecent}%
                            </span>
                            <span className="ps-1 text-b-xs font-medium text-g-gray-1">
                                vs last month
                            </span>
                        </h3>
                    </div>
                    <Image
                        src={MedCondition}
                        alt="decent condition"
                        height={100}
                        width={100}
                    />
                </div>
                <div className="border-p-blue-5 flex grow gap-5 rounded-xl border border-solid p-7 shadow-md">
                    <div className="flex flex-col gap-1">
                        <p className="block text-start text-b-lg font-semibold">
                            Critical Condition
                        </p>
                        <h3 className="block text-start text-h-2xl font-bold">
                            {((curObj.critical / curObj.total) * 100).toFixed(
                                1
                            )}
                            %
                        </h3>

                        <h3 className="block text-start text-sm font-semibold">
                            <span className="text-b-xs font-medium text-p-blue-1">
                                {compareObj.difCritical}%
                            </span>
                            <span className="ps-1 text-b-xs font-medium text-g-gray-1">
                                vs last month
                            </span>
                        </h3>
                    </div>
                    <Image
                        src={BadCondition}
                        alt="critical condition"
                        className="rotate-90"
                        height={100}
                        width={100}
                    />
                </div>
            </div>
            <RecordTable employeeList={emplist} />
        </>
    );
}

export default AssessmentRecords;
