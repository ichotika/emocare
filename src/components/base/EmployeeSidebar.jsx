"use client";
// import icons
import MobileLogo from "@/public/icons/logo_mobile.svg";
import DesktopLogo from "@/public/icons/logo_main.svg";
import Hamburger from "@/public/assets/Wireframes/hamburgerMenu.svg";
// import FAQ from "@/public/assets/Wireframes/faq.svg";
// import Feedback from "@/public/assets/Wireframes/faq.svg";
// import Logout from "@/public/assets/Wireframes/log-out.svg";
// import ProRequest from "@/public/assets/Wireframes/ProRequest.svg";
// import bell from "@/public/assets/Wireframes/bell.svg";

// import others 
import { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import TopNav from "../company/topNav";
import { usePathname } from "next/navigation";
import Header from "../employees/Header";
// import { useRouter } from 'next/router';


const EmployeeSidebar = ({ menuRoutes, supportRoutes }) => {

    // Set Logo depending on the screen size. 
    const [isDesktop, setIsDesktop] = useState();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsDesktop(true);
                // console.log("this is the window.innerWidth from line 28 ==>>", window.innerWidth)
            } else {
                setIsDesktop(false)
                // console.log("this is the window.innerWidth from line 31 ==>>", window.innerWidth)
            }
        };

        // Call the handleResize when screen size is changed
        window.addEventListener('resize',
            handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize',
                handleResize);
        };
    }, [window.innerWidth]);

    // const [hiddenHamburger, setHiddenHamburger] = useState(true)

    // useEffect(() => {
    //     handleClose();
    // }, [pathname])

    // const handleClose = () => {
    //     setHiddenHamburger(true);
    // }

    return (
        <>
            <header className="flex grow justify-between xl:items-center xl:bg-blue-700 text-blue-700 xl:text-white">

                {/* Emocare Logo */}
                <Link href={"/"}>
                    <Image
                        src={isDesktop ? DesktopLogo : MobileLogo}
                        alt="Emocare-logo"
                    />
                </Link>

                {/* humburger icon */}
                <nav className="hidden xl:block">
                    <ul className="flex xl:bg-blue-700 grow pl-0">
                        <li className="grow">
                            <Link href={"/"} className="p-0">
                                <Image
                                    src={Hamburger}
                                    alt="hamburger menu" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* sidebar */}
            <aside className="flex flex-col min-h-screen">
                <div className="flex flex-col">
                    <div className="hidden xl:block text-center">
                        <Header headertext={""} mb={0} mt={0} hidden={"hidden"}></Header>
                    </div>
                    <nav>
                        <ul>
                            {menuRoutes.map((menu, index) =>
                                <li
                                    key={index}
                                    className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                                    <Link
                                        className="side-menu flex"
                                        href={`/employees/${menu.slug}`}
                                    >
                                        <Image
                                            className="fill-blue-500"
                                            src={menu.image}
                                            alt={menu.name}
                                            width={24}
                                            height={24} />
                                        {menu.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col">
                    <nav>
                        <ul>
                        {supportRoutes.map((support, index) =>
                                <li
                                    key={index}
                                    className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                                    <Link
                                        className="side-menu flex"
                                        href={`/employees/${support.slug}`}
                                    >
                                        <Image
                                            className="fill-blue-500"
                                            src={support.image}
                                            alt={support.name}
                                            width={24}
                                            height={24} />
                                        {support.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>

                    {/* Signout button */}
                    <div className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                    <UserButton afterSignOutUrl="/"></UserButton>
                </div>

                </div>
            </aside>
        </>
    );
};

// function HamburgerMenu({})

export default EmployeeSidebar;