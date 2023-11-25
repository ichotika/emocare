"use client";
import Link from "next/link";
import Image from "next/image";
import DesktopLogo from "@/public/icons/logo_main.svg";
import Hamburger from "@/public/assets/Wireframes/hamburgerMenu.svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopNav({ routes }) {
    const pathname = usePathname();

    const [hiddenHamburgerNav, setHiddenHamburgerNav] = useState(true);

    useEffect(() => {
        handleClose();
    }, [pathname]);

    const handleToggle = () => {
        setHiddenHamburgerNav(!hiddenHamburgerNav);
    };

    // const handleOpen = () => {
    //     setHiddenHamburgerNav(false);
    // };

    const handleClose = () => {
        setHiddenHamburgerNav(true);
    };

    return (
        <>
            <nav
                className={
                    "z-20 flex h-20 flex-row items-center justify-between bg-white px-20 py-4 shadow-[0_2px_6px_0_rgba(0,0,0,0.15)] lg:fixed lg:left-0 lg:right-0 lg:top-0 lg:h-16 lg:px-4"
                }
            >
                <Link href={"/company"}>
                    <Image src={DesktopLogo} alt="Emocare Logo" height={60} />
                </Link>
                <button onClick={handleToggle} className={"hidden lg:block"}>
                    <Image
                        src={Hamburger}
                        alt="hamburger menu"
                        className={"invert"}
                    />
                </button>
                <div className={"flex flex-row gap-6 lg:hidden"}>
                    <ul className={"flex flex-row items-center gap-4"}>
                        {routes.map((route, index) => (
                            <li key={index}>
                                <Link
                                    className={`block px-2 py-3 font-bold ${
                                        pathname === `/company/${route.slug}`
                                            ? "text-p-blue-1 underline decoration-2 underline-offset-[12px]"
                                            : ""
                                    }`}
                                    href={`/company/${route.slug}`}
                                >
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={"flex flex-row items-center gap-2"}>
                        <Link
                            href={"/sign-in"}
                            className={
                                "rounded-lg border-2 border-p-blue-1 px-7 py-3 font-bold text-p-blue-1"
                            }
                        >
                            Member Login
                        </Link>
                        <Link
                            href={"/company/contact"}
                            className={
                                "rounded-lg border-2 border-p-blue-1 bg-p-blue-1 px-7 py-3 font-bold text-g-white-1"
                            }
                        >
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </nav>
            <HamburgerNav
                className={"z-10"}
                routes={routes}
                tuckedAway={hiddenHamburgerNav}
            ></HamburgerNav>
        </>
    );
}

function HamburgerNav({ routes, tuckedAway}) {
    const pathname = usePathname();

    return (
        <nav
            className={`fixed left-0 right-0 top-16 z-10 hidden flex-col items-center gap-5 bg-g-white-1 py-8 transition-all lg:flex shadow-[0_2px_6px_0_rgba(0,0,0,0.15)] ${
                tuckedAway ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            <ul className={"flex flex-col items-center gap-4"}>
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link
                            className={`block px-2 py-3 font-bold ${
                                pathname === `/company/${route.slug}`
                                    ? "text-p-blue-1 underline decoration-2 underline-offset-[12px]"
                                    : ""
                            }`}
                            href={`/company/${route.slug}`}
                        >
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className={"flex flex-col gap-4"}>
                <Link
                    href={"/sign-in"}
                    className={
                        "rounded-lg border-2 border-p-blue-1 px-7 py-3 font-bold text-p-blue-1"
                    }
                >
                    Member Login
                </Link>
                <Link
                    href={"/company/contact"}
                    className={
                        "rounded-lg border-2 border-p-blue-1 bg-p-blue-1 px-7 py-3 font-bold text-g-white-1"
                    }
                >
                    Request a Demo
                </Link>
            </div>
            {/*<button*/}
            {/*    onClick={onClose}*/}
            {/*    className={"rounded-full bg-blue-600 p-1 text-3xl text-white"}*/}
            {/*>*/}
            {/*    X*/}
            {/*</button>*/}
        </nav>
    );
}
