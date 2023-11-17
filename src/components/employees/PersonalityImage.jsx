import { useEffect, useState } from "react";
import Image from "next/image";
import AdventurerImage from "@/public/assets/employees/Personality - Adventurer.svg"
import AdvocateImage from "@/public/assets/employees/Personality - Advocate.svg"
import ArchitectImage from "@/public/assets/employees/Personality - Architect.svg"
import CampaignerImage from "@/public/assets/employees/Personality - Campaigner.svg"
import CommanderImage from "@/public/assets/employees/Personality - Commander.svg"
import ConsulImage from "@/public/assets/employees/Personality - Consul.svg"
import DebaterImage from "@/public/assets/employees/Personality - Debater.svg"
import DefenderImage from "@/public/assets/employees/Personality - Defender.svg"
import EntertainerImage from "@/public/assets/employees/Personality - Entertainer.svg"
import EntrepreneurImage from "@/public/assets/employees/Personality - Entrepreneur.svg"
import ExecutiveImage from "@/public/assets/employees/Personality - Executive.svg"
import LogicianImage from "@/public/assets/employees/Personality - Logician.svg"
import LogisticianImage from "@/public/assets/employees/Personality - Logistician.svg"
import MediatorImage from "@/public/assets/employees/Personality - Mediator.svg"
import ProtagonistImage from "@/public/assets/employees/Personality - Protagonist.svg"
import VirtuosoImage from "@/public/assets/employees/Personality - Virtuoso.svg"
import DefaultImage from "@/public/assets/organization/user.svg"

export default function PersonalityImage({personality, imgWidth, imgHeight}) {
    const [personalityImage, setPersonalityImage] = useState(DefaultImage);
    
    useEffect(() => {
        const fetchImg = () => {
            switch (personality) {
                case "Adventurer":
                    setPersonalityImage(AdventurerImage)
                    break;
                case "Advocate":
                    setPersonalityImage(AdvocateImage)
                    break;
                case "Architect":
                    setPersonalityImage(ArchitectImage)
                    break;
                case "Campaigner":
                    setPersonalityImage(CampaignerImage)
                    break;
                case "Commander":
                    setPersonalityImage(CommanderImage)
                    break;
                case "Consul":
                    setPersonalityImage(ConsulImage)
                    break;
                case "Debater":
                    setPersonalityImage(DebaterImage)
                    break;
                case "Defender":
                    setPersonalityImage(DefenderImage)
                    break;
                case "Entertainer":
                    setPersonalityImage(EntertainerImage)
                    break;
                case "Entrepreneur":
                    setPersonalityImage(EntrepreneurImage)
                    break;
                case "Executive":
                    setPersonalityImage(ExecutiveImage)
                    break;
                case "Logician":
                    setPersonalityImage(LogicianImage)
                    break;
                case "Logistician":
                    setPersonalityImage(LogisticianImage)
                    break;
                case "Mediator":
                    setPersonalityImage(MediatorImage)
                    break;
                case "Protagonist":
                    setPersonalityImage(ProtagonistImage)
                    break;
                case "Virtuoso":
                    setPersonalityImage(VirtuosoImage)
                    break;
            
                default:
                    setPersonalityImage(DefaultImage)
                    break;
            }
        };
        fetchImg();
    },[personality])

    return (
        <>
            <div className="flex justify-center py-4">
                <Image src={ personalityImage } width={imgWidth} height={imgHeight} priority={false} alt="Picture" />
            </div>
        </>
    )
}
