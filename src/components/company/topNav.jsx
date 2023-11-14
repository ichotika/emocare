"use client"
import Link from "next/link";
import Image from "next/image";
import emocareLogo from "@/public/assets/Wireframes/EmoCare_logo 1.svg";
import {useEffect, useState, useRef} from "react";
import {usePathname} from "next/navigation";


export default function TopNav({routes}) {

    const pathname = usePathname();

    const [hiddenHamburgerNav, setHiddenHamburgerNav] = useState(true);

    const topNavRef = useRef(null);

    useEffect(() => {
        handleClose();
    }, [pathname]);

    useEffect(() => {
        console.log("height", topNavRef.current);
    }, []);

    const handleOpen = () => {
        setHiddenHamburgerNav(false);
    }

    const handleClose = () => {
        setHiddenHamburgerNav(true);
    }

    return (
        <>
            <nav ref={topNavRef}
                 className={"z-10 bg-white flex flex-row items-center justify-between sm:fixed sm:top-0 sm:right-0 sm:left-0"}>
                <Image src={emocareLogo} height={50} alt="Emocare Logo"/>
                <button onClick={handleOpen}
                        className={"bg-blue-600 text-white text-3xl rounded-xl p-1 hidden sm:block"}>=
                </button>
                <div className={"flex flex-row gap-8 sm:hidden"}>
                    <ul className={"flex flex-row gap-4"}>
                        {routes.map((route, index) =>
                            <li key={index}>
                                <Link className={"block"} href={`/company/${route.slug}`}>{route.name}</Link>
                            </li>)}
                    </ul>
                    <div className={"flex flex-row gap-2"}>
                        <Link href={"/sign-in"}>
                            Member Login
                        </Link>
                        <Link href={"/company/contact"}>
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </nav>
            <HamburgerNav spacing={topNavRef.current ? topNavRef.current.clientHeight : 0} className={"z-10"}
                          routes={routes} tuckedAway={hiddenHamburgerNav} onClose={handleClose}></HamburgerNav>
        </>

    )
}

function HamburgerNav({routes, tuckedAway, onClose, spacing}) {


    return (
        <nav
            className={`z-10 bg-blue-600 text-white flex flex-col gap-4 items-center fixed inset-0 top-[${spacing}px] transition-all ${tuckedAway ? "translate-x-full" : "translate-x-0"}`}>
            <ul className={"flex flex-col gap-4"}>
                {routes.map((route, index) =>
                    <li key={index}>
                        <Link className={"block"} href={`/company/${route.slug}`}>{route.name}</Link>
                    </li>)}
            </ul>
            <div className={"flex flex-col gap-2"}>
                <Link href={"/sign-in"}>
                    Member Login
                </Link>
                <Link href={"/company/contact"}>
                    Request a Demo
                </Link>
            </div>
            <button onClick={onClose} className={"bg-blue-600 text-white text-3xl rounded-full p-1"}>X</button>
        </nav>)
}