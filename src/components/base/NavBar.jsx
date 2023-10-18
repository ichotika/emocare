"use client";
import Logo from "@/public/assets/Wireframes/EmoCare_logo 1.svg"

const Navbar = () => {
    return (
        // display: flex, flex: space between
        <> 
            <header>
                <nav>
                    <ul>
                        <li><Link href={`/dashboard`}><Image src={Dashboard} width={24} height={24} alt="dashboard icon" />Dashboard</Link></li>
                        <li><Link href={`/assessment`}><Image src={Assessment} width={24} height={24} alt="assessment icon" />Assessment Records</Link></li>
                        <li><Link href={`/education`}><Image src={Education} width={24} height={24} alt="education icon" />Education</Link></li>
                        <li><Link href={`/emergencysupport`}><Image src={EmergencySupport} width={24} height={24} alt="emergency support icon" />Emergency Support</Link></li>
                    </ul>
                </nav>
            </header>

            <footer>
                <nav>
                    <ul>
                        <li><button><LInk href={`singin`}>Log Out</LInk></button></li>
                    </ul>
                </nav>
            </footer>

        </>
    );
};

export default MainBtn;
