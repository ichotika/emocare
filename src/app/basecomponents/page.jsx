import MainBtn from "@/components/base/MainBtn";
import Notification from "@/components/base/Notification";
import React from "react";
import RoundedBtn from "@/components/base/RoundedBtn";
import HeaderTab from "@/components/base/HeaderTab";
import Pagination from "@/components/base/Pagination";
const textColorClasses = [
    "text-p-blue-1",
    "text-p-blue-2",
    "text-p-blue-3",
    "text-p-blue-4",
    "text-s-orange-1",
    "text-s-orange-2",
    "text-s-orange-3",
    "text-s-orange-4",
    "text-o-navy-1",
    "text-o-joy-1",
    "text-o-success-1",
    "text-o-success-2",
    "text-o-error-1",
    "text-g-black-1",
    "text-g-gray-1",
    "text-g-gray-2",
    "text-g-gray-3",
    "text-g-gray-4",
    "text-g-white-1",
];

const bgColorClasses = [
    "bg-p-blue-1",
    "bg-p-blue-2",
    "bg-p-blue-3",
    "bg-p-blue-4",
    "bg-s-orange-1",
    "bg-s-orange-2",
    "bg-s-orange-3",
    "bg-s-orange-4",
    "bg-o-navy-1",
    "bg-o-joy-1",
    "bg-o-success-1",
    "bg-o-success-2",
    "bg-o-error-1",
    "bg-g-black-1",
    "bg-g-gray-1",
    "bg-g-gray-2",
    "bg-g-gray-3",
    "bg-g-gray-4",
    "bg-g-white-1",
];
const fontSizeClasses = [
    "text-h-xl",
    "text-h-2xl",
    "text-h-3xl",
    "text-h-4xl",
    "text-h-5xl",
    "text-h-6xl",
    "text-b-xs",
    "text-b-sm",
    "text-b-base",
    "text-b-lg",
    "text-b-xl",
    "text-b-2xl",
    "text-b-3xl",
    "text-b-4xl",
    "text-b-5xl",
];
const dataArr = [
    {
        userId: 1,
        userImg: "https://randomuser.me/api/portraits/men/27.jpg",
        department: "Marketing",
        fullname: "Laura Davis",
        title: "Manager",
        pending: false,
        joinDate: "2020-11-07T20:00:50.673Z",
    },
    {
        userId: 2,
        userImg: "https://randomuser.me/api/portraits/men/91.jpg",
        department: "Sales",
        fullname: "Alice Doe",
        title: "Analyst",
        pending: true,
        joinDate: "2020-08-31T14:56:16.165Z",
    },
    {
        userId: 3,
        userImg: "https://randomuser.me/api/portraits/men/20.jpg",
        department: "Sales",
        fullname: "Alice Johnson",
        title: "Coordinator",
        pending: true,
        joinDate: "2021-12-08T12:13:09.218Z",
    },
    {
        userId: 4,
        userImg: "https://randomuser.me/api/portraits/men/82.jpg",
        department: "Marketing",
        fullname: "Jane Smith",
        title: "Analyst",
        pending: false,
        joinDate: "2021-01-19T23:33:22.737Z",
    },
    {
        userId: 5,
        userImg: "https://randomuser.me/api/portraits/men/78.jpg",
        department: "IT",
        fullname: "Alex Smith",
        title: "Coordinator",
        pending: true,
        joinDate: "2020-09-26T14:09:27.302Z",
    },
    {
        userId: 6,
        userImg: "https://randomuser.me/api/portraits/men/44.jpg",
        department: "Operations",
        fullname: "John Brown",
        title: "Developer",
        pending: false,
        joinDate: "2021-01-19T06:27:21.171Z",
    },
    {
        userId: 7,
        userImg: "https://randomuser.me/api/portraits/men/93.jpg",
        department: "HR",
        fullname: "Tom Johnson",
        title: "Analyst",
        pending: false,
        joinDate: "2023-06-21T14:40:41.513Z",
    },
    {
        userId: 8,
        userImg: "https://randomuser.me/api/portraits/men/15.jpg",
        department: "Sales",
        fullname: "Alice Wilson",
        title: "Manager",
        pending: true,
        joinDate: "2021-05-23T07:28:46.154Z",
    },
    {
        userId: 9,
        userImg: "https://randomuser.me/api/portraits/women/76.jpg",
        department: "Finance",
        fullname: "Jane Wilson",
        title: "Developer",
        pending: true,
        joinDate: "2021-03-14T00:10:11.846Z",
    },
    {
        userId: 10,
        userImg: "https://randomuser.me/api/portraits/women/46.jpg",
        department: "Operations",
        fullname: "Laura Brown",
        title: "Developer",
        pending: false,
        joinDate: "2020-04-22T22:39:23.573Z",
    },
    {
        userId: 11,
        userImg: "https://randomuser.me/api/portraits/women/82.jpg",
        department: "Marketing",
        fullname: "Alice Johnson",
        title: "Specialist",
        pending: true,
        joinDate: "2022-07-12T18:07:27.684Z",
    },
    {
        userId: 12,
        userImg: "https://randomuser.me/api/portraits/women/57.jpg",
        department: "HR",
        fullname: "Laura Brown",
        title: "Developer",
        pending: false,
        joinDate: "2023-09-13T16:59:08.163Z",
    },
    {
        userId: 13,
        userImg: "https://randomuser.me/api/portraits/women/61.jpg",
        department: "Operations",
        fullname: "Tom Brown",
        title: "Analyst",
        pending: true,
        joinDate: "2022-06-19T19:04:45.193Z",
    },
    {
        userId: 14,
        userImg: "https://randomuser.me/api/portraits/men/27.jpg",
        department: "Finance",
        fullname: "Jane Johnson",
        title: "Coordinator",
        pending: true,
        joinDate: "2020-01-19T09:17:05.828Z",
    },
    {
        userId: 15,
        userImg: "https://randomuser.me/api/portraits/women/5.jpg",
        department: "Operations",
        fullname: "Jane Wilson",
        title: "Manager",
        pending: true,
        joinDate: "2022-02-15T21:49:46.224Z",
    },
    {
        userId: 16,
        userImg: "https://randomuser.me/api/portraits/women/18.jpg",
        department: "Marketing",
        fullname: "Laura Brown",
        title: "Analyst",
        pending: false,
        joinDate: "2020-08-17T17:40:48.209Z",
    },
    {
        userId: 17,
        userImg: "https://randomuser.me/api/portraits/women/7.jpg",
        department: "Marketing",
        fullname: "Alice Brown",
        title: "Coordinator",
        pending: true,
        joinDate: "2020-07-21T08:50:53.926Z",
    },
    {
        userId: 18,
        userImg: "https://randomuser.me/api/portraits/men/56.jpg",
        department: "Operations",
        fullname: "Laura Johnson",
        title: "Developer",
        pending: false,
        joinDate: "2020-05-23T10:38:19.192Z",
    },
    {
        userId: 19,
        userImg: "https://randomuser.me/api/portraits/men/80.jpg",
        department: "Sales",
        fullname: "Alex Brown",
        title: "Coordinator",
        pending: false,
        joinDate: "2022-02-12T19:47:07.049Z",
    },
    {
        userId: 20,
        userImg: "https://randomuser.me/api/portraits/women/77.jpg",
        department: "Operations",
        fullname: "Alice Brown",
        title: "Developer",
        pending: true,
        joinDate: "2023-03-15T14:25:19.026Z",
    },
    {
        userId: 21,
        userImg: "https://randomuser.me/api/portraits/women/65.jpg",
        department: "Sales",
        fullname: "Alice Davis",
        title: "Developer",
        pending: false,
        joinDate: "2022-08-14T07:48:13.038Z",
    },
    {
        userId: 22,
        userImg: "https://randomuser.me/api/portraits/women/72.jpg",
        department: "Finance",
        fullname: "John Davis",
        title: "Developer",
        pending: false,
        joinDate: "2021-03-30T15:01:58.393Z",
    },
    {
        userId: 23,
        userImg: "https://randomuser.me/api/portraits/women/91.jpg",
        department: "Marketing",
        fullname: "Alex Wilson",
        title: "Analyst",
        pending: true,
        joinDate: "2020-09-25T09:21:29.942Z",
    },
    {
        userId: 24,
        userImg: "https://randomuser.me/api/portraits/men/91.jpg",
        department: "Finance",
        fullname: "Jane Johnson",
        title: "Manager",
        pending: false,
        joinDate: "2020-07-23T19:19:17.055Z",
    },
    {
        userId: 25,
        userImg: "https://randomuser.me/api/portraits/men/38.jpg",
        department: "Marketing",
        fullname: "Alice Wilson",
        title: "Coordinator",
        pending: false,
        joinDate: "2022-02-05T03:06:41.345Z",
    },
    {
        userId: 26,
        userImg: "https://randomuser.me/api/portraits/women/45.jpg",
        department: "Operations",
        fullname: "Alice Davis",
        title: "Specialist",
        pending: false,
        joinDate: "2022-01-23T01:32:18.061Z",
    },
    {
        userId: 27,
        userImg: "https://randomuser.me/api/portraits/women/67.jpg",
        department: "Marketing",
        fullname: "Alice Doe",
        title: "Manager",
        pending: true,
        joinDate: "2020-02-23T12:49:19.706Z",
    },
    {
        userId: 28,
        userImg: "https://randomuser.me/api/portraits/women/15.jpg",
        department: "Marketing",
        fullname: "Tom Davis",
        title: "Manager",
        pending: false,
        joinDate: "2021-10-03T17:11:09.830Z",
    },
    {
        userId: 29,
        userImg: "https://randomuser.me/api/portraits/men/89.jpg",
        department: "Marketing",
        fullname: "Laura Brown",
        title: "Manager",
        pending: false,
        joinDate: "2020-06-13T06:07:41.396Z",
    },
    {
        userId: 30,
        userImg: "https://randomuser.me/api/portraits/women/49.jpg",
        department: "Finance",
        fullname: "John Doe",
        title: "Analyst",
        pending: false,
        joinDate: "2023-04-12T04:29:03.481Z",
    },
];

const SampleComponent = () => {
    const colors = [
        "p-blue-1",
        "p-blue-2",
        "p-blue-3",
        "p-blue-4",
        "s-orange-1",
        "s-orange-2",
        "s-orange-3",
        "s-orange-4",
        "o-navy-1",
        "o-joy-1",
        "o-success-1",
        "o-success-2",
        "o-error-1",
        "g-black-1",
        "g-gray-1",
        "g-gray-2",
        "g-gray-3",
        "g-gray-4",
        "g-white-1",
    ];

    const fontSizes = [
        "b-xs",
        "b-sm",
        "b-base",
        "b-lg",
        "b-xl",
        "b-2xl",
        "b-3xl",
        "b-4xl",
        "b-5xl",
    ];
    const headerSizes = ["h-6xl", "h-5xl", "h-4xl", "h-3xl", "h-2xl", "h-xl"];
    return (
        <div className="bg-g-white-1 p-8">
            <div className="space-y-4">
                {colors.map((color) => (
                    <p key={color} className={`text-b-5xl bg-${color}`}>
                        {`bg-${color}`}
                    </p>
                ))}
            </div>
            <div className="bg-gradient-org p-4 text-white">
                bg-gradient-org
            </div>
            <div className="bg-gradient-blue p-4 text-white">
                bg-gradient-blue
            </div>
            <div className="bg-gradient-orange p-4 text-white">
                bg-gradient-orange
            </div>
            {headerSizes.map((size, index) =>
                React.createElement(
                    `h${index + 1}`,
                    { className: `text-${size}` },
                    `text-${size}`
                )
            )}
            <div className="mt-8 space-y-4">
                {fontSizes.map((size) => (
                    <p key={size} className={`text-${size} text-g-black-1 `}>
                        {`text-${size}`}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default function Basecomponent() {
    return (
        <>
            <h2>HeaderTab</h2>
            <HeaderTab tabNames={["ALL", "Designer", "Developper"]} />
            <br />
            <h2>MainBtn</h2>
            <MainBtn
                buttontext={"Confirm"}
                bgColor={"bg-blue-700"}
                textColor={"text-white"}
            />
            <br />
            <br />
            {/* <h2>Notification</h2>
            <Notification /> */}
            <br />
            <h2>RoundedBtn</h2>
            <RoundedBtn
                buttontext={"Notify"}
                bgColor={"bg-blue-700"}
                textColor={"text-white"}
            />
            <Pagination dataArr={dataArr} max={5} />
            <SampleComponent />
        </>
    );
}
