"use client";
import Logo from "@/public/icons/logo_white.svg";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
const EmployeeSidebar = () => {
    return (
        // display: flex, flex: space between
        <>
            <div className="flex min-h-full flex-col justify-between bg-blue-700 text-white">
                <header className="p-5">
                    <Link href={"/"}>
                        <Image src={Logo} alt="logo}" />
                    </Link>
                    <nav>
                        <ul>
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
                            </li>
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
            </div>
        </>
    );
};

export default EmployeeSidebar;
