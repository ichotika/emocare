"use client";
// import icons
import MobileLogo from "@/public/icons/logo_mobile.svg";
import DesktopLogo from "@/public/icons/logo_main.svg";
import Hamburger from "@/public/assets/Wireframes/hamburgerMenu.svg";

// import hooks
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../employees/Header";
import useWindowDimensions from "@/components/base/WindsizeChanger";
import { usePathname } from "next/navigation";

const EmployeeSidebar = ({ menuRoutes, supportRoutes }) => {
    // Hamburger menu
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const toggleHamburger = (event) => {
        event.preventDefault();
        // console.log("toggle button is clicked")
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    // Set Logo depending on the screen size.
    const [isDesktop, setIsDesktop] = useState();

    const myWindow = useWindowDimensions();

    useEffect(() => {
        if (myWindow.width >= 1280) {
            setIsDesktop(true);
            // console.log("this is the window.innerWidth from line 28 ==>>", myWindow.width);
        } else {
            setIsDesktop(false);
            // console.log("this is the window.innerWidth from line 31 ==>>", myWindow.width)
        }
    }, [myWindow]);

    const pathname = usePathname();

    return (
        <>
            <header className="flex grow-0 justify-between text-p-blue-1 xl:items-center xl:bg-p-blue-1 xl:p-4 xl:text-white">
                {/* Emocare Logo */}
                <Link href={"/"}>
                    <Image
                        src={isDesktop ? DesktopLogo : MobileLogo}
                        alt="Emocare-logo"
                    />
                </Link>

                {/* hamburger menu */}
                <button className="hidden xl:block" onClick={toggleHamburger}>
                    <Image src={Hamburger} alt="hamburger menu" />
                </button>
            </header>

            {/* sidebar */}
            <aside
                className={`mt-16 flex h-screen grow flex-col justify-between xl:fixed xl:mt-0 xl:bg-white xl:px-6 xl:pb-12 xl:pt-16 xl:transition-all ${
                    isHamburgerOpen
                        ? "z-10 w-[320px] xl:translate-x-0"
                        : "xl:-translate-x-full"
                }`}
            >
                {/* upper group*/}
                <div className="flex flex-col">
                    {/* user account & notification */}
                    <div className="hidden items-center justify-center xl:mb-2 xl:flex xl:items-center">
                        <Header
                            headertext={""}
                            marginTB="mb-0 mt-0"
                            hidden={"hidden"}
                        ></Header>
                    </div>

                    {/* main nav */}
                    <nav>
                        <ul>
                            {menuRoutes.map((menu, index) => (
                                <li key={index}>
                                    <Link
                                        className={`side-menu flex rounded-lg px-6 py-3 font-bold leading-6 text-p-blue-1 ${
                                            pathname ===
                                            `/employees${menu.slug}`
                                                ? "bg-p-blue-1 text-white"
                                                : ""
                                        } `}
                                        //
                                        href={`/employees/${menu.slug}`}
                                    >
                                        <Image
                                            className="mr-2 fill-blue-500 hover:fill-white"
                                            src={menu.image}
                                            alt={menu.name}
                                            width={24}
                                            height={24}
                                        />
                                        {menu.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* lower group */}
                <div className="flex flex-col">
                    <nav className="mb-6">
                        <ul>
                            {supportRoutes.map((support, index) => (
                                <li key={index}>
                                    <Link
                                        className={`side-menu flex rounded-lg px-6 py-3 font-bold leading-6 text-p-blue-1 ${
                                            pathname ===
                                            `/employees${support.slug}`
                                                ? "bg-p-blue-1 text-white"
                                                : ""
                                        } `}
                                        href={`/employees/${support.slug}`}
                                    >
                                        <Image
                                            className="mr-2 fill-blue-500"
                                            src={support.image}
                                            alt={support.name}
                                            width={24}
                                            height={24}
                                        />
                                        {support.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Signout button */}
                    {/* <div className="mt-6 rounded-lg px-6 py-3 hover:bg-p-blue-1 hover:text-white">
                        <UserButton afterSignOutUrl="/"></UserButton>
                    </div> */}
                </div>
            </aside>
        </>
    );
};

export default EmployeeSidebar;
