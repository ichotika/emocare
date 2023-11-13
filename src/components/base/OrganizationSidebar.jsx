"use client";
import Logo from "@/public/icons/logo_white.svg";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

const OrganizationSidebar = () => {
    return (
        // display: flex, flex: space between
        <>
            <div className="fixed flex h-full flex-col justify-between text-white sm:h-auto">
                <header className="pt-16">
                    <Link href={"/"}>
                        <Image src={Logo} alt="logo}" />
                    </Link>
                    <nav className="pt-16">
                        <ul>
                            <li className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                                <Link href="/organization/">Dashboard</Link>
                            </li>
                            <li className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                                <Link href="/organization/records">
                                    Assessment Record
                                </Link>
                            </li>
                            <li className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                                <Link href="/organization/management">
                                    Management
                                </Link>
                            </li>
                            {/* <Image src={Dashboard}  width={24} height={24} alt="dashboard icon" />
                                <Image src={Assessment} width={24} height={24} alt="assessment icon" />
                                <Image src={Education} width={24} height={24} alt="education icon" />
                                <Image src={EmergencySupport} width={24} height={24} alt="emergency support icon" />*/}
                        </ul>
                    </nav>
                </header>

                <footer className="pb-16">
                    <div className="rounded-lg px-2 py-3 hover:bg-blue-700 hover:text-white">
                        <SignOutButton />
                    </div>
                </footer>
            </div>
        </>
    );
};

export default OrganizationSidebar;
