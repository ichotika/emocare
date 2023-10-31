import Tests from "@/components/assessment/Tests";
import EmployeeSidebar from "@/components/base/EmployeeSidebar";
import Link from "next/link";

const Assessment = () => {
    return (
        <>
            <div className="flex">

                <EmployeeSidebar />
                <div className="bg-slate-100">
                    <div className="mentalHealth" >
                        <h5 className="text-4xl font-bold pt-10 pb-5 pl-5">Mental Health Assessments</h5>
                        <Tests>
                        </Tests>
                    </div>

                    <div>
                        <h5 className="text-4xl font-bold pt-10 pb-5 pl-5">Personality Test</h5>
                        {/* <div className="flex"> */}
                        <div className="card flex bg-white m-4 p-4 border-1 rounded-2xl border-slate-950">
                            {/* <Image></Image> */}
                            <div className="flex grow-1/3">
                                <div className="flex flex-col justify-between">
                                    <div className="">
                                        <h2 className="text-xl font-bold pt-8">Personality Test</h2>
                                        <p className="qustions mt-6"><span className="font-bold">Questions:</span>33</p>
                                        <p className="duration mb-6"><span className="font-bold">Duration:</span> 10 min</p>
                                        <p className="description mb-12">This is a personality test that will give you a result equivalent to the Myers-Briggs Type Indicator.
                                        </p>
                                    </div>
                                    <div className="flex justify-center my-4">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded-lg"><Link href={"/personality"}>Take Assessment</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Assessment;