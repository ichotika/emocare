"use client";
import { Combobox, Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import Logo from "@/public/icons/logo_main.svg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";


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
    onDeptDecide,
    onDesignDecide,
}) {
    return (
        <div className="grid justify-start max-w-lg rounded-md shadow-2xl p-8">
            <div className={"flex flex-col gap-3 my-3"}>
                <Image src={Logo} alt={"EmoCare Logo"} height={40}></Image>
                <h1 className={"font-archivo text-2xl text-center"}>Select Your Role and Your Organization</h1>
                <p className={"font-manrope text-base text-center"}>It&apos;s important for your company and us to know about you</p>
                <hr className={"h-0 w-full border-t border-t-g-gray-3"} />
            </div>
            <p className={"font-manrope text-xl text-center font-semibold mb-2"}>I am an</p>
            <MyTabs
                onOrgDecide={onOrgDecide}
                onDeptDecide={onDeptDecide}
                onDesignDecide={onDesignDecide}
                className={"my-5"}
            ></MyTabs>
        </div>
    );
}

// First Tab UI
function SelectOrg({ onOrgDecide, onDeptDecide, onDesignDecide }) {
    const [orgs, setOrgs] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedOrg, setSelectedOrg] = useState("");
    const [department, setDepartment] = useState("");
    const [designation, setDesignation] = useState("");

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
        <div className="flex flex-col font-manrope text-lg">
            <p className={"mt-2 mb-7 font-manrope text-xl font-semibold text-center"}>Join Organization to Improve well-being:</p>

            <Combobox as="div" value={selectedOrg} onChange={setSelectedOrg}>
                <Combobox.Label className="block font-bold leading-6 text-gray-900 mb-1">Assigned to</Combobox.Label>
                <div className="relative mb-4">
                    <Combobox.Input
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Select Organization"
                        className="w-full rounded border-0 bg-white py-3 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-g-gray-3 focus:ring-2 focus:ring-inset focus:ring-p-blue-1 sm:text-sm sm:leading-6"
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <HiChevronUpDown></HiChevronUpDown>
                    </Combobox.Button>
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredOrg.map((orgOption) => (
                            <Combobox.Option
                                disabled={orgOption!=="WMDD"}
                                key={orgOption}
                                value={orgOption}
                                className={({ active }) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active ? 'bg-p-blue-1 text-white' : 'text-gray-900'
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                  <span
                      className={classNames(
                          'block truncate',
                          selected && 'font-semibold'
                      )}
                  >
                    {orgOption}
                  </span>
                                        {selected && (
                                            <span
                                                className={classNames(
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                    active ? 'text-white' : 'text-p-blue-1'
                                                )}
                                            >
                      <FaCheck className="h-5 w-5" aria-hidden="true" />
                    </span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                </div>
            </Combobox>

            <div className={"flex flex-col gap-1 mb-5"}>
                <label htmlFor={"department"} className={"font-bold"}>Department</label>
                <select name="department" id="department" onChange={setDepartment} className={"bg-g-white-1 py-3 px-6 block rounded border border-g-gray-3 border-solid"}>
                    {deptArr.map((dept) => (
                        <option key={dept} value={dept}>
                            {dept}
                        </option>
                    ))}
                </select>
            </div>

            <div className={"flex flex-col gap-1"}>
                <label htmlFor={"designation"} className={"font-bold"}>Designation</label>
                <input type="text" name="designation" id="designation" className={"bg-g-white-1 py-3 px-6 block rounded border border-g-gray-3 border-solid"} onChange={(event) => setDesignation(event.target.value)}
                       placeholder="e.g: Lead Developer"/>
            </div>

            <button
                className="mt-10 block bg-p-blue-1 text-white rounded py-3 px-6 w-full"
                disabled={!selectedOrg}
                onClick={() => {
                    onOrgDecide(selectedOrg);
                    onDeptDecide(department);
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


    return (
        <div className={"text-lg"}>
            <p className={"mt-2 mb-7 font-manrope text-xl font-semibold text-center"}>Register Organization to Track & Manage:</p>
            <div className={"flex flex-col gap-1"}>
                <label htmlFor={"createOrgName"} className={"font-bold"}>New Organization Name</label>
                <input
                    id={"createOrgName"}
                    type="text"
                    className="bg-g-white-1 py-3 px-6 block rounded border border-g-gray-3 border-solid"
                    value={createdOrg}
                    placeholder={"Acme Corporation"}
                    onChange={(e) => setCreatedOrg(e.target.value)}
                />
            </div>
            <button
                className="mt-10 block bg-p-blue-1 text-white rounded py-3 px-6 w-full"
                // disabled={!createdOrg}
                // Blocking organization creation for live site
                disabled
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
                {/*{createdOrg*/}
                {/*    ? `Sign up as Employer of ${createdOrg}`*/}
                {/*    : `Please name your Organization`}*/}
                Currently Not Available
            </button>
        </div>
    );
}

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function MyTabs({ onOrgDecide, onDeptDecide, onDesignDecide }) {
    return (
        <Tab.Group>
            <Tab.List className="flex space-x-2 rounded-xl p-1">
                <Tab
                    className={({ selected }) =>
                        classNames(
                            "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                            selected
                                ? "bg-p-blue-1 text-g-white-1"
                                : "bg-g-white-1 border-2 border-p-blue-1 text-p-blue-1"
                        )
                    }
                >
                    <h2 className={"font-manrope text-xl font-bold"}>Employee</h2>
                </Tab>
                <Tab
                    className={({ selected }) =>
                        classNames(
                            "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                            selected
                                ? "bg-p-blue-1 text-g-white-1"
                                : "bg-g-white-1 border-2 border-p-blue-1 text-p-blue-1"
                        )
                    }
                >
                    <h2 className={"font-manrope text-xl font-bold"}>Employer</h2>
                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                    <SelectOrg
                        onOrgDecide={onOrgDecide}
                        onDeptDecide={onDeptDecide}
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
