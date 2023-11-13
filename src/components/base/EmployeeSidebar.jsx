"use client";
// import icons
import MobileLogo from "@/public/icons/logo_mobile.svg";
import DesktopLogo from "@/public/icons/logo_main.svg";
// import Hamburger from "@/public/Wireframes/hamburgerMenu.svg";

// import others 
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import TopNav from "../company/topNav";

const EmployeeSidebar = ({ menuRoutes, supportRoutes }) => {

    return (
        // display: flex, flex: space between
        <>
            {/* <TopNav routes={routes}></TopNav> */}

                <header className="p-5">
                    <Link href={"/"}>
                        <Image src={DesktopLogo} alt="Emocare-logo"
                        className="fill-blue-700 text-blue-700 hover:fill-white hover:text-white pr-2" />
                    </Link>

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
                            {/* 
                            <li className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                                <Link href="/employees">Dashboard</Link>
                            </li>
                            <li className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                                <Link href="/employees/assessment">
                                    Assessment
                                </Link>
                            </li>
                            <li className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                                <Link href="/employees/education">
                                    Education
                                </Link>
                            </li>
                            <li className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                                <Link href="/employees/emergency">
                                    Emergency Calling
                                </Link>
                            </li> */}
                            {/* <Image src={Dashboard}  width={24} height={24} alt="dashboard icon" />
                                <Image src={Assessment} width={24} height={24} alt="assessment icon" />
                                <Image src={Education} width={24} height={24} alt="education icon" />
                                <Image src={EmergencySupport} width={24} height={24} alt="emergency support icon" />*/}
                        </ul>
                    </nav>
                </header>

                <footer className="p-5">

                    <div className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                        <UserButton afterSignOutUrl="/"></UserButton>
                    </div>
                </footer>
        </>
    );
};

export default EmployeeSidebar;
