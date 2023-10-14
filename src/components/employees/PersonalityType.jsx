import Image from "next/image"
import Profile from "@/public/assets/Wireframes/bell.svg";

function PersonalityType() {
    return (
        <div className="m-5 p-5" style={{backgroundColor: '#ffffff', borderRadius: '1rem'}}>
           <h1>Your Personality Type</h1>
           <Image src={Profile} width={100} height={100} alt="Picture"/>
           <div>
            <h2>Personality 1</h2>
            <p>Qui dolore laboriosam qui dolor nostrum et impedit dolores sit aspernatur tempore qui voluptate neque eos dignissimos nostrum.</p>
            <p className="text-center pt-6">View All</p>
           </div>
        </div>
    )
}

export default PersonalityType
