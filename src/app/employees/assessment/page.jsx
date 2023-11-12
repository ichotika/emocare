import Tests from "@/components/assessment/Tests";
import Link from "next/link";
import Header from "@/components/employees/Header";

const Assessment = () => {
    return (
        <>
            <Header headertext={"Assessment"} />
            <div className="bg-slate-100">
                <div className="mentalHealth">
                    <h5 className="pb-5 pl-5 pt-10 text-4xl font-bold">
                        Mental Health Assessments
                    </h5>
                    <Tests></Tests>
                </div>

                <div>
                    <h5 className="pb-5 pl-5 pt-10 text-4xl font-bold">
                        Personality Test
                    </h5>
                    {/* <div className="flex"> */}
                    <div className="card border-1 m-4 flex rounded-2xl border-slate-950 bg-white p-4">
                        {/* <Image></Image> */}
                        <div className="grow-1/3 flex">
                            <div className="flex flex-col justify-between">
                                <div className="">
                                    <h2 className="pt-8 text-xl font-bold">
                                        Personality Test
                                    </h2>
                                    <p className="qustions mt-6">
                                        <span className="font-bold">
                                            Questions:
                                        </span>
                                        33
                                    </p>
                                    <p className="duration mb-6">
                                        <span className="font-bold">
                                            Duration:
                                        </span>{" "}
                                        10 min
                                    </p>
                                    <p className="description mb-12">
                                        This is a personality test that will
                                        give you a result equivalent to the
                                        Myers-Briggs Type Indicator.
                                    </p>
                                </div>
                                <div className="my-4 flex justify-center">
                                    <button className="px-14 rounded-lg bg-blue-500 py-2 font-bold text-white hover:bg-blue-700">
                                        <Link
                                            href={
                                                "/employees/assessment/personality"
                                            }
                                        >
                                            Take Assessment
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Assessment;
