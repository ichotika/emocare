"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import BadCondition from "@/public/assets/organization/Decline.gif";
import GoodCondition from "@/public/assets/organization/Growth.gif";
import MedCondition from "@/public/assets/organization/Normal.gif";
import RecordTable from "@/components/organizations/RecordTable";
import Up from "@/public/icons/up.svg";
import Down from "@/public/icons/down.svg";
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
            <div className="mt-6 flex gap-6 xl:flex-col">
                <div className="flex grow justify-between rounded-xl border border-solid border-p-blue-5 p-5 shadow-md">
                    <div className="flex grow flex-col gap-1">
                        <p className="block text-start text-b-lg font-semibold">
                            Good Condition
                        </p>
                        <h3 className="block text-start text-h-2xl font-bold">
                            {((curObj.good / curObj.total) * 100).toFixed(1)}%
                        </h3>

                        <div className="flex items-center gap-2 text-start text-sm font-semibold">
                            {compareObj.difGood > 0 ? (
                                <>
                                    <Image src={Up} alt={"score increased"} />
                                    <h3 className="text-b-xs font-medium text-p-blue-1">
                                        {compareObj.difGood}%
                                    </h3>
                                </>
                            ) : (
                                <>
                                    <Image src={Down} alt={"score increased"} />
                                    <h3 className="text-b-xs font-medium text-p-blue-1">
                                        {-compareObj.difGood}%
                                    </h3>
                                </>
                            )}
                            <span className="text-b-xs font-medium text-g-gray-1">
                                vs last month
                            </span>
                        </div>
                    </div>
                    <div className="flex h-[6.25rem] w-[6.25rem] items-center justify-center">
                        <Image src={GoodCondition} alt="good condition" />{" "}
                    </div>
                </div>
                <div className="flex grow justify-between rounded-xl border border-solid border-p-blue-5 p-5 shadow-md">
                    <div className="flex grow flex-col gap-1">
                        <p className="block text-start text-b-lg font-semibold">
                            Moderate Condition
                        </p>
                        <h3 className="block text-start text-h-2xl font-bold">
                            {((curObj.decent / curObj.total) * 100).toFixed(1)}%
                        </h3>

                        <div className="flex items-center gap-2 text-start text-sm font-semibold">
                            {compareObj.difDecent > 0 ? (
                                <>
                                    <Image src={Up} alt={"score increased"} />
                                    <h3 className="text-b-xs font-medium text-p-blue-1">
                                        {compareObj.difDecent}%
                                    </h3>
                                </>
                            ) : (
                                <>
                                    <Image src={Down} alt={"score increased"} />
                                    <h3 className="text-b-xs font-medium text-p-blue-1">
                                        {-compareObj.difDecent}%
                                    </h3>
                                </>
                            )}
                            <span className="text-b-xs font-medium text-g-gray-1">
                                vs last month
                            </span>
                        </div>
                    </div>
                    <div className="flex h-[6.25rem] w-[6.25rem] items-center justify-center">
                        <Image src={MedCondition} alt="decent condition" />
                    </div>
                </div>
                <div className="flex grow justify-between rounded-xl border border-solid border-p-blue-5 p-5 shadow-md">
                    <div className="flex grow flex-col gap-1">
                        <p className="block text-start text-b-lg font-semibold">
                            Critical Condition
                        </p>
                        <h3 className="block text-start text-h-2xl font-bold">
                            {((curObj.critical / curObj.total) * 100).toFixed(
                                1
                            )}
                            %
                        </h3>

                        <div className="flex items-center gap-2 text-start text-sm font-semibold">
                            {compareObj.difCritical > 0 ? (
                                <>
                                    <Image src={Up} alt={"score increased"} />
                                    <h3 className="text-b-xs font-medium text-p-blue-1">
                                        {compareObj.difCritical}%
                                    </h3>
                                </>
                            ) : (
                                <>
                                    <Image src={Down} alt={"score increased"} />
                                    <h3 className="text-b-xs font-medium text-p-blue-1">
                                        {-compareObj.difCritical}%
                                    </h3>
                                </>
                            )}
                            <span className="text-b-xs font-medium text-g-gray-1">
                                vs last month
                            </span>
                        </div>
                    </div>
                    <div className="flex h-[6.25rem] w-[6.25rem] items-center justify-center">
                        <Image src={BadCondition} alt="critical condition" />
                    </div>
                </div>
            </div>
            <RecordTable employeeList={emplist} />
        </>
    );
}

export default AssessmentRecords;
