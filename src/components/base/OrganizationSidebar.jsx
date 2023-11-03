"use client";
import Logo from "@/public/assets/Wireframes/EmoCare_logo 1.svg";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

const OrganizationSidebar = () => {
    return (
        // display: flex, flex: space between
        <>
            <div className="flex flex-col min-h-full bg-blue-700 justify-between text-white">
                <header className="p-5">
                    <h1 className="py-3 px-2 mb-6">Emocare</h1>
                    <nav>
                        <ul>
                            <li className="py-3 px-2 rounded-lg hover:bg-blue-700 hover:text-white">
                                <Link href="/organization/dashboard">Dashboard </Link>
                            </li>
                            <li className="py-3 px-2 rounded-lg hover:bg-blue-700 hover:text-white">
                                <Link href="/organization/records">
                                    Assessment Record
                                </Link>
                            </li>
                            <li className="py-3 px-2 rounded-lg hover:bg-blue-700 hover:text-white">
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

                <footer className="p-5">
                    <div className="py-3 px-2 rounded-lg hover:bg-blue-700 hover:text-white" >
                        <SignOutButton />
                    </div>
                </footer>
            </div>
        </>
    );
};

export default OrganizationSidebar;
