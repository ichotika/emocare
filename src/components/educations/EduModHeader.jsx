import Image from "next/image"
import Resource1 from "@/public/assets/education/Resource1.svg"
import Resource2 from "@/public/assets/education/Resource2.svg"
import Anxiety from "@/public/assets/education/Anxiety.svg"
import Depression from "@/public/assets/education/Depression.svg"
import Burnout from "@/public/assets/education/Burnout.svg"

export default function EduModHeader({header, topicId}) {
    const HeaderImage = topicId === "T01" ? Resource1 : topicId === "T02" ? Resource2 : topicId === "T03" ? Depression : topicId === "T04" ? Anxiety : topicId === "T05" ? Burnout : false ;
    return (
        <div className="relative pb-8">
            {HeaderImage ? <Image src={HeaderImage} width={`100%`} height={`100%`} alt="Picture" /> : "" }
            <h1 className="absolute bottom-0 left-0 text-h-2xl pl-4 pb-8 font-bold">{header}</h1>
        </div>
    )
}
