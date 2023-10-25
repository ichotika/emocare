"use client";

import { SignUp } from "@clerk/nextjs";
import { Combobox, Tab } from "@headlessui/react";
import { useState } from "react";
import {HiChevronUpDown} from "react-icons/hi2";

export default function SignUpUI() {
    return (
        <div className="grid justify-center">
            <h1>Organizations</h1>
            <h2>I want to</h2>
            <MyTabs></MyTabs>
            <button className="bg-blue-800 text-white">
                Create Account with Organization
            </button>
        </div>
    );
}

const orgs = [
    "Acme Corporation",
    "Tech Solutions Inc.",
    "Global Innovations Group",
    "Green Energy Foundation",
    "Data Science Co.",
    "Rainbow Charity Network",
    "Xenon Industries",
    "EcoTech Systems",
    "Sunshine Healthcare Services",
    "Blue Sky Marketing",
];

function SelectOrg() {
    const [selectedOrg, setSelectedOrg] = useState("");
    const [query, setQuery] = useState("");

    const filteredOrg =
        query === ""
            ? orgs
            : orgs.filter((org) => {
                  return org.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <div>
            <Combobox value={selectedOrg} onChange={setSelectedOrg}>
                <div className="relative">
                    <Combobox.Input
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <HiChevronUpDown></HiChevronUpDown>
                    </Combobox.Button>
                </div>
                <Combobox.Options>
                    {filteredOrg.map((person) => (
                        <Combobox.Option key={person} value={person}>
                            {person}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </div>
    );
}

function CreateOrg() {
    return (
        <div>
            <span>
                My organization is named{" "}
                <input type="text" className="bg-amber-400 p-2" />
            </span>
        </div>
    );
}


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function MyTabs() {
    return (
        <Tab.Group>
            <Tab.List className="flex space-x-5 rounded-xl p-1">
                <Tab
                    className={({ selected }) =>
                        classNames(
                            "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                            selected
                                ? "bg-white shadow"
                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                    }
                >
                    Join an existing Organization (Employee)
                </Tab>
                <Tab
                    className={({ selected }) =>
                        classNames(
                            "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                            selected
                                ? "bg-white shadow"
                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                    }
                >
                    Create a new Organization (Employer)
                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                    <SelectOrg></SelectOrg>
                </Tab.Panel>
                <Tab.Panel>
                    <CreateOrg></CreateOrg>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}
