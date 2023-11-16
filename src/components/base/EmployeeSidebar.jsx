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
import useWindowDimensions from '@/components/base/WindsizeChanger';
// import { useRouter } from 'next/router';

const EmployeeSidebar = ({ menuRoutes, supportRoutes }) => {

    // Set Logo depending on the screen size. 
    const [isDesktop, setIsDesktop] = useState();

    const myWindow = useWindowDimensions();

    useEffect(() => {
        // const handleResize = () => {
            
            if (myWindow.width >= 1280) {
                setIsDesktop(true);
                console.log("this is the window.innerWidth from line 28 ==>>", myWindow.width);
            }else {
                    setIsDesktop(false)
                    console.log("this is the window.innerWidth from line 31 ==>>", myWindow.width)
                }
            // if (window.innerWidth >= 1280) {
            //     setIsDesktop(true);
            //     // console.log("this is the window.innerWidth from line 28 ==>>", window.innerWidth)
            // } else {
            //     setIsDesktop(false)
            //     // console.log("this is the window.innerWidth from line 31 ==>>", window.innerWidth)
            // }
        // };

        // Call the handleResize when screen size is changed
        // window.addEventListener('resize',
        //     handleResize);

        // // handleResize();

        // return () => {
        //     window.removeEventListener('resize',
        //         handleResize);
        // };
    }, [myWindow]);

    // const [hiddenHamburger, setHiddenHamburger] = useState(true)

    // useEffect(() => {
    //     handleClose();
    // }, [pathname])

    // const handleClose = () => {
    //     setHiddenHamburger(true);
    // }

    return (
        <>
            <header className="flex grow-0 justify-between xl:items-center xl:bg-blue-700 text-blue-700 xl:text-white xl:p-4">

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
            <aside className="flex grow flex-col h-screen justify-between  mt-16 xl:mt-0 xl:pt-16 xl:pb-12 xl:px-6">
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
                                    className="rounded-lg px-6 py-3 hover:bg-blue-700 text-blue-700 hover:text-white">
                                    <Link
                                        className="side-menu flex"
                                        href={`/employees/${menu.slug}`}
                                    >
                                        <Image
                                            className="fill-blue-500 mr-2"
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
                <div className="flex flex-col">
                    <nav className="mb-6">
                        <ul>
                            {supportRoutes.map((support, index) =>
                                <li
                                    key={index}
                                    className="rounded-lg px-6 py-3 hover:bg-blue-700 text-blue-700 hover:text-white">
                                    <Link
                                        className="side-menu flex"
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
                    <div className="rounded-lg px-6 py-3 mt-6 hover:bg-blue-700 hover:text-white">
                        <UserButton afterSignOutUrl="/"></UserButton>
                    </div>

                </div>
            </aside>
        </>
    );
};


export default EmployeeSidebar;