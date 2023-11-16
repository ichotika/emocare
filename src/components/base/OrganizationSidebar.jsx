"use client";

// import icons
import MainOrgLogo from "@/public/icons/logo_org_main.svg";
import MobileLogo from "@/public/icons/logo_mobile.svg";
import Hamburger from "@/public/assets/Wireframes/hamburgerMenu.svg";

// import others
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import Header from "../employees/Header";
import useWindowDimensions from '@/components/base/WindsizeChanger';
import { usePathname } from "next/navigation";

const OrganizationSidebar = ({ menuRoutes }) => {

    // Hamburger menu
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const toggleHamburger = (event) => {
        event.preventDefault();
        // console.log("toggle button is clicked")
        setIsHamburgerOpen(!isHamburgerOpen);
        // console.log(isHamburgerOpen)
    }

    // Set Logo depending on the screen size. 
    const [isDesktop, setIsDesktop] = useState();

    const myWindow = useWindowDimensions();

    useEffect(() => {         
        if (myWindow.width >= 1280) {
            setIsDesktop(true);
            // console.log("this is the window.innerWidth from line 28 ==>>", myWindow.width);
        }else {
                setIsDesktop(false)
                // console.log("this is the window.innerWidth from line 31 ==>>", myWindow.width)
        }
    }, [myWindow]);

    const pathname = usePathname();

    return (
        <>
            <header className="flex grow-0 xl:w-screen justify-between xl:items-center xl:bg-o-navy-1 text-white xl:p-4">

                {/* Emocare Logo */}
                <Link href={"/"}>
                    <Image
                        src={isDesktop ? MainOrgLogo : MobileLogo}
                        alt="Emocare-logo"
                        className="ml-7 xl:ml-0"
                    />
                </Link>

                {/* Hamburger Menu */}

                <button className="hidden xl:block" onClick={toggleHamburger}>
                    <Image
                        src={Hamburger}
                        alt="hamburger menu"
                    />
                </button>

            </header>

            {/* Sidebar */}
            <aside className={`flex grow flex-col h-screen justify-between mt-16 xl:mt-0 xl:pt-16 xl:pb-12 xl:px-6 xl:fixed xl:bg-white xl:transition-all ${isHamburgerOpen ? "xl:translate-x-0 w-[320px] z-10 xl:bg-gradient-org" : "xl:-translate-x-full"}`}>

                <div className="flex flex-col">
                    <div className="hidden xl:flex justify-center items-center xl:items-center xl:mb-2">
                        <Header headertext={""} mb={0} mt={0} hidden={"hidden"}></Header>
                    </div>
                    <nav>
                        <ul>
                            {menuRoutes.map((menu, index) =>
                                <li key={index}>
                                    <Link
                                        className={`side-menu flex rounded-lg pl-6 py-3 leading-6 text-white ${pathname === `/organization${menu.slug}` ? "bg-p-blue-1 font-bold" : ""} `}
                                        href={`/organization${menu.slug}`}
                                    >
                                        <Image
                                            className="mr-2"
                                            src={menu.image}
                                            alt={menu.name}
                                            width={24}
                                            height={24}
                                        />
                                        {menu.name}
                                    </Link>
                                </li>
                            )
                            }
                        </ul>
                    </nav>
                </div>
                <div className="rounded-lg px-6 py-3 mt-6 hover:bg-p-blue-1 hover:text-white">
                    <UserButton afterSignOutUrl="/"></UserButton>
                </div>
            </aside>
        </>
    );
};

export default OrganizationSidebar;
