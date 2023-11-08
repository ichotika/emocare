"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import BadCondition from "@/public/assets/organization/badConditionIcon.svg";
import GoodCondition from "@/public/assets/organization/goodConditionIcon.svg";
import MedCondition from "@/public/assets/organization/medConditionIcon.svg";
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
        <div>
            <div className="flex gap-5">
                <div className="flex grow gap-5 rounded-xl border border-solid border-teal-600 bg-teal-50 p-7">
                    <div className="flex flex-col gap-1">
                        <h3 className="block text-start text-2xl font-bold">
                            {((curObj.good / curObj.total) * 100).toFixed(1)}%
                        </h3>
                        <p className="block text-start text-xl font-bold">
                            Good Condition
                        </p>
                        <h3 className="block text-start text-sm font-semibold">
                            {compareObj.difGood}%
                        </h3>
                    </div>
                    <Image src={GoodCondition} alt="good condition" />
                </div>
                <div className="flex grow gap-5 rounded-xl border border-solid border-yellow-400 bg-yellow-50 p-7">
                    <div className="flex flex-col gap-1">
                        <h3 className="block text-start text-2xl font-bold">
                            {((curObj.decent / curObj.total) * 100).toFixed(1)}%
                        </h3>
                        <p className="block text-start text-xl font-bold">
                            Decent Condition
                        </p>
                        <h3 className="block text-start text-sm font-semibold">
                            {compareObj.difDecent}%
                        </h3>
                    </div>
                    <Image src={MedCondition} alt="decent condition" />
                </div>
                <div className="flex grow gap-5 rounded-xl border border-solid border-red-600 bg-red-50 p-7">
                    <div className="flex flex-col gap-1">
                        <h3 className="block text-start text-2xl font-bold">
                            {((curObj.critical / curObj.total) * 100).toFixed(
                                1
                            )}
                            %
                        </h3>
                        <p className="block text-start text-xl font-bold">
                            Critical Condition
                        </p>
                        <h3 className="block text-start text-sm font-semibold">
                            {compareObj.difCritical}%
                        </h3>
                    </div>
                    <Image src={BadCondition} alt="critical condition" />
                </div>
            </div>
            <RecordTable employeeList={emplist} />
        </div>
    );
}

export default AssessmentRecords;
