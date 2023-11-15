"use client";
// import icons
import MobileLogo from "@/public/icons/logo_mobile.svg";
import DesktopLogo from "@/public/icons/logo_main.svg";
import Hamburger from "@/public/assets/Wireframes/hamburgerMenu.svg";

// import hooks
import { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Header from "../employees/Header";
// import { useRouter } from "next/router";

const EmployeeSidebar = ({ menuRoutes, supportRoutes }) => {

    // Hamburger menu
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const toggleHamburger = (event) => {
        event.preventDefault();
        // console.log("toggle button is clicked")
        setIsHamburgerOpen(!isHamburgerOpen);
        console.log(isHamburgerOpen)
    }

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

    // const router = useRouter();

    return (
        <>
            <header className="flex grow-0 justify-between xl:items-center xl:bg-p-blue-1 text-p-blue-1 xl:text-white xl:p-4">

                {/* Emocare Logo */}
                <Link href={"/"}>
                    <Image
                        src={isDesktop ? DesktopLogo : MobileLogo}
                        alt="Emocare-logo"
                    />
                </Link>


                {/* hamburger menu */}
                <button className="hidden xl:block" onClick={toggleHamburger}>
                    <Image
                        src={Hamburger}
                        alt="hamburger menu"
                    />
                </button>
            </header>

            {/* sidebar */}
            <aside className={`flex grow flex-col h-screen justify-between mt-16 xl:mt-0 xl:pt-16 xl:pb-12 xl:px-6 xl:fixed xl:bg-white xl:transition-all ${isHamburgerOpen ? "xl:translate-x-0 w-[320px] z-10" : "xl:-translate-x-full"}`}>

                {/* upper group*/}
                <div className="flex flex-col">

                    {/* user account & notification */}
                    <div className="hidden xl:flex justify-center items-center xl:items-center xl:mb-2">
                        <Header headertext={""} mb={0} mt={0} hidden={"hidden"}></Header>
                    </div>

                    {/* main nav */}
                    <nav>
                        <ul>
                            {menuRoutes.map((menu, index) =>
                                <li
                                    key={index}
                                    className="rounded-lg px-6 py-3 hover:bg-p-blue-1 text-p-blue-1 hover:text-white">
                                    <Link
                                        className="side-menu flex leading-6 font-bold"
                                        href={`/employees/${menu.slug}`}
                                    >
                                        <Image
                                            className="fill-blue-500 hover:fill-white mr-2"
                                            src={menu.image}
                                            alt={menu.name}
                                            width={24}
                                            height={24}
                                        />
                                        {menu.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>

                {/* lower group */}
                <div className="flex flex-col">
                    <nav className="mb-6">
                        <ul>
                            {supportRoutes.map((support, index) =>
                                <li
                                    key={index}
                                    className="rounded-lg px-6 py-3 hover:bg-p-blue-1 text-p-blue-1 hover:text-white">
                                    <Link
                                        className="side-menu flex leading-6 font-bold"
                                        href={`/employees/${support.slug}`}
                                    >
                                        <Image
                                            className="fill-blue-500 mr-2"
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
                    <div className="rounded-lg px-6 py-3 mt-6 hover:bg-p-blue-1 hover:text-white">
                        <UserButton afterSignOutUrl="/"></UserButton>
                    </div>

                </div>
            </aside>
        </>
    );
};

// function HamburgerMenu({})

export default EmployeeSidebar;