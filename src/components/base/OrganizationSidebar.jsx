"use client";

// import icons
import MainOrgLogo from "@/public/icons/logo_org_main.svg";
import MobileLogo from "@/public/icons/logo_mobile.svg";
import Hamburger from "@/public/assets/Wireframes/hamburgerMenu.svg";

// import others
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "@/components/organizations/Header";
import useWindowDimensions from "@/components/base/WindsizeChanger";
import { usePathname } from "next/navigation";

const OrganizationSidebar = ({ menuRoutes }) => {
    // Hamburger menu
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const toggleHamburger = (event) => {
        event.preventDefault();
        // console.log("toggle button is clicked")
        setIsHamburgerOpen(!isHamburgerOpen);
        // console.log(isHamburgerOpen)
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
            <header className="flex grow-0 justify-between text-white xl:items-center xl:bg-o-navy-1 xl:p-4">
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
                    <Image src={Hamburger} alt="hamburger menu" />
                </button>
            </header>

            {/* Sidebar */}
            <aside
                className={`mt-[62px] flex h-screen grow flex-col justify-between xl:fixed xl:mt-0 xl:bg-white xl:px-6 xl:pb-12 xl:pt-16 xl:transition-all ${
                    isHamburgerOpen
                        ? "z-10 w-[320px] xl:translate-x-0 xl:bg-gradient-org"
                        : "xl:-translate-x-full"
                }`}
            >
                <div className="flex flex-col">
                    <div className="hidden items-center justify-center xl:mb-2 xl:flex xl:items-center xl:justify-end">
                        <Header
                            headertext={""}
                            isHidden={true}
                            color={"#FFFFFF"}
                        ></Header>
                    </div>
                    <nav>
                        <ul>
                            {menuRoutes.map((menu, index) => (
                                <li key={index}>
                                    <Link
                                        className={`side-menu flex rounded-lg px-3 py-4 text-b-lg leading-6 text-white ${
                                            pathname ===
                                            `/organization${menu.slug}`
                                                ? "bg-p-blue-1 font-bold"
                                                : ""
                                        } `}
                                        href={`/organization${menu.slug}`}
                                        onClick={() =>
                                            setIsHamburgerOpen(false)
                                        }
                                    >
                                        <div className="text-white">
                                            <Image
                                                className="mr-2"
                                                src={menu.image}
                                                alt={menu.name}
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                        {menu.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default OrganizationSidebar;
