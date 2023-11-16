import Link from "next/link";
import Image from "next/image";

const AssessmentCard = ({ title, questions, duration, description, link, src }) => {

    // const getAssessData = 

    return (
        <div className="card-container flex">
            <div className="card flex flex-col grow basis-1/3 bg-white pb-4 border-1 rounded-2xl shadow-sm">
                <Image src={src} alt="take a depression assessment"
                className="w-full h-fit rounded-t-2xl"></Image>
                <div className="box-container flex grow px-4 py-6">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col">
                            <p className="self-stretch text-2xl font-bold">{title}</p>
                            <p className="qustions mt-4 leading-6"><span className="font-bold">Questions: </span>{questions}</p>
                            <p className="duration mb-6 leading-6"><span className="font-bold">Duration:</span> {duration} minutes</p>
                            <p className="description mb-12 leading-6">{description}</p>
                        </div>
                        <div className="flex justify-center my-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-24 rounded-lg grow"><Link href={link}>Take Assessment</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssessmentCard;