"use client";
import Link from "next/link";
import Image from "next/image";
import emocareLogo from "@/public/assets/Wireframes/EmoCare_logo 1.svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopNav({ routes }) {
    const pathname = usePathname();

    const [hiddenHamburgerNav, setHiddenHamburgerNav] = useState(true);

    useEffect(() => {
        handleClose();
    }, [pathname]);

    const handleOpen = () => {
        setHiddenHamburgerNav(false);
    };

    const handleClose = () => {
        setHiddenHamburgerNav(true);
    };

    return (
        <>
            <nav
                className={
                    "z-10 flex flex-row items-center justify-between bg-white sm:fixed sm:left-0 sm:right-0 sm:top-0 sm:h-[50px]"
                }
            >
                <Link href={"/company"}>
                    <Image src={emocareLogo} height={50} alt="Emocare Logo" />
                </Link>
                <button
                    onClick={handleOpen}
                    className={
                        "hidden rounded-xl bg-blue-600 p-1 text-3xl text-white sm:block"
                    }
                >
                    =
                </button>
                <div className={"flex flex-row gap-8 sm:hidden"}>
                    <ul className={"flex flex-row gap-4"}>
                        {routes.map((route, index) => (
                            <li key={index}>
                                <Link
                                    className={"block"}
                                    href={`/company/${route.slug}`}
                                >
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={"flex flex-row gap-2"}>
                        <Link href={"/sign-in"}>Member Login</Link>
                        <Link href={"/company/contact"}>Request a Demo</Link>
                    </div>
                </div>
            </nav>
            <HamburgerNav
                className={"z-10"}
                routes={routes}
                tuckedAway={hiddenHamburgerNav}
                onClose={handleClose}
            ></HamburgerNav>
        </>
    );
}

function HamburgerNav({ routes, tuckedAway, onClose }) {
    return (
        <nav
            className={`fixed inset-0 top-[50px] z-10 flex flex-col items-center gap-4 bg-blue-600 text-white transition-all ${
                tuckedAway ? "translate-x-full" : "translate-x-0"
            }`}
        >
            <ul className={"flex flex-col gap-4"}>
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link
                            className={"block"}
                            href={`/company/${route.slug}`}
                        >
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className={"flex flex-col gap-2"}>
                <Link href={"/sign-in"}>Member Login</Link>
                <Link href={"/company/contact"}>Request a Demo</Link>
            </div>
            <button
                onClick={onClose}
                className={"rounded-full bg-blue-600 p-1 text-3xl text-white"}
            >
                X
            </button>
        </nav>
    );
}
