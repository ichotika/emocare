"use client";

import { Combobox, Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import { useRouter } from "next/navigation";
const deptArr = [
    "Designer",
    "Developer",
    "IT",
    "Finance",
    "Marketing",
    "Operation",
];
export default function SignUpUI({
    onOrgDecide,
    onDeptDeicde,
    onDesignDecide,
}) {
    return (
        <div className="grid justify-center">
            <h1>Organizations</h1>
            <h2>I want to</h2>
            <MyTabs
                onOrgDecide={onOrgDecide}
                onDeptDeicde={onDeptDeicde}
                onDesignDecide={onDesignDecide}
            ></MyTabs>
        </div>
    );
}

// First Tab UI
function SelectOrg({ onOrgDecide, onDeptDeicde, onDesignDecide }) {
    const [orgs, setOrgs] = useState([]);
    const [selectedOrg, setSelectedOrg] = useState("");
    const [query, setQuery] = useState("");
    const [department, setDepartment] = useState("");
    const [designation, setDesignation] = useState("");
    const router = useRouter();

    useEffect(() => {
        const fetchOrgs = async () => {
            try {
                const response = await fetch("/api/organizations");
                if (response.ok) {
                    const data = await response.json();
                    setOrgs(data.orgList.map(({ orgName }) => orgName));
                } else {
                    console.error(
                        "Failed to fetch data from /api/organizations"
                    );
                }
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            }
        };
        fetchOrgs();
    }, []);
    const filteredOrg =
        query === ""
            ? orgs
            : orgs.filter((org) => {
                  return org.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <div className="flex flex-col">
            <Combobox value={selectedOrg} onChange={setSelectedOrg}>
                <div className=" relative mb-4 border border-slate-800">
                    <Combobox.Input
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Select Organization"
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
            <Combobox value={department} onChange={setDepartment}>
                <div className=" relative mb-4 border border-slate-800">
                    <Combobox.Input
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Select Department"
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <HiChevronUpDown></HiChevronUpDown>
                    </Combobox.Button>
                </div>
                <Combobox.Options>
                    {deptArr.map((dept) => (
                        <Combobox.Option key={dept} value={dept}>
                            {dept}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
            <Combobox value={designation} onChange={setDesignation}>
                <div className=" relative mb-4 border border-slate-800">
                    <Combobox.Input
                        onChange={(event) => setDesignation(event.target.value)}
                        placeholder="Type Designation"
                    />
                </div>
            </Combobox>

            <button
                className="block bg-blue-800 text-white"
                disabled={!selectedOrg}
                onClick={() => {
                    onOrgDecide(selectedOrg);
                    onDeptDeicde(department);
                    onDesignDecide(designation);
                }}
            >
                {selectedOrg
                    ? `Create Account with ${selectedOrg}`
                    : `Please select your Organization`}
            </button>
        </div>
    );
}

// Second Tab UI
function CreateOrg({ onOrgDecide }) {
    const [createdOrg, setCreatedOrg] = useState("");

    const router = useRouter();

    return (
        <div>
            <span>
                My organization will be named{" "}
                <input
                    type="text"
                    className="bg-amber-400 p-2"
                    value={createdOrg}
                    onChange={(e) => setCreatedOrg(e.target.value)}
                />
            </span>
            <button
                className="block bg-blue-800 text-white"
                disabled={!createdOrg}
                onClick={() => {
                    const checkOrgs = async () => {
                        try {
                            const response = await fetch("/api/organizations");
                            if (response.ok) {
                                const data = await response.json();
                                const orgNames = data.orgList.map(
                                    ({ orgName }) => orgName
                                );
                                // Name matches an existing org => Bad!
                                if (orgNames.includes(createdOrg)) {
                                    alert("Your organization already exists!");
                                }
                                // New org name => OK!
                                else {
                                    onOrgDecide(createdOrg);
                                }
                            } else {
                                console.error(
                                    "Failed to fetch data from /api/organizations"
                                );
                            }
                        } catch (error) {
                            console.error(
                                "An error occurred while checking data:",
                                error
                            );
                        }
                    };
                    // console.log(createdOrg);
                    checkOrgs();
                }}
            >
                {createdOrg
                    ? `Create Account with ${createdOrg}`
                    : `Please name your Organization`}
            </button>
        </div>
    );
}

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function MyTabs({ onOrgDecide, onDeptDeicde, onDesignDecide }) {
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
                    <SelectOrg
                        onOrgDecide={onOrgDecide}
                        onDeptDeicde={onDeptDeicde}
                        onDesignDecide={onDesignDecide}
                    ></SelectOrg>
                </Tab.Panel>
                <Tab.Panel>
                    <CreateOrg onOrgDecide={onOrgDecide}></CreateOrg>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}
