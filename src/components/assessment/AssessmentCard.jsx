import Link from "next/link";
import Image from "next/image";

const AssessmentCard = ({ title, questions, duration, description, link, src }) => {

    // const getAssessData = 

    return (

            <div className="card-container flex flex-col grow">
                <div className="card flex flex-col grow bg-white border-1 rounded-2xl shadow-sm">
                    <Image src={src} alt="take a depression assessment"
                    className="flex flex-col w-full h-fit rounded-t-2xl"></Image>
                    <div className="description flex grow">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col px-4 py-6">
                                <p className="text-2xl font-bold">{title}</p>
                                <p className="qustions mt-4 leading-6"><span className="font-bold">Questions: </span>{questions}</p>
                                <p className="duration mb-6 leading-6"><span className="font-bold">Duration:</span> {duration} minutes</p>
                                <p className="description leading-6">{description}</p>
                            </div>
                            <div className="flex flex-col justify-center p-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-2 rounded-lg grow"><Link href={link}>Take Assessment</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default AssessmentCard;