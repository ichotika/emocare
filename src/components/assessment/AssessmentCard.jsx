import Link from "next/link";

const AssessmentCard = ({ title, questions, duration, description, link }) => {
    return (
        <div className="card flex grow basis-1/3 bg-white m-4 p-4 border-1 rounded-2xl border-slate-950">
            {/* <Image></Image> */}
            <div className="flex grow">
                <div className="flex flex-col justify-between">
                    <div className="">
                        <h2 className="text-xl font-bold pt-8">{title}</h2>
                        <p className="qustions mt-6"><span className="font-bold">Questions:</span>{questions}</p>
                        <p className="duration mb-6"><span className="font-bold">Duration:</span> {duration} min</p>
                        <p className="description mb-12">{description}</p>
                    </div>
                    <div className="flex justify-center my-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded-lg"><Link href={link}>Take Assessment</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssessmentCard;