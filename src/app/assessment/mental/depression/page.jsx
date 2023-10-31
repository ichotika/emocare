import AnxietyResult from "@/components/assessment/mentalassessment/AnxietyResult";

const DepressionResult = () => {
    return (
        <>
            <div className="flex">
                <EmployeeSidebar />
                <div>
                    <h5 className="">Patient Health Questionnaire-9 (PHQ-9)</h5>
                    <AnxietyResult />

                    <table className="border" style={{ width: "100%" }}>
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-2">Score</th>
                                <th >Depression Severity</th>
                                <th colSpan="5">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="py-3">0-4</td>
                                <td>None-Minimal</td>
                                <td colSpan="5">Patient may not need depression treatment.</td>
                            </tr>
                            <tr className="text-center">
                                <td className="py-3">5-9</td>
                                <td>Mild</td>
                                <td colSpan="5">Patient may not need depression treatment.</td>
                            </tr>
                            <tr className="text-center">
                                <td className="py-3">10-14</td>
                                <td>None-Minimal</td>
                                <td colSpan="5">Patient may not need depression treatment.</td>
                            </tr>
                            <tr className="text-center">
                                <td className="py-3">15-19</td>
                                <td>Moderatery Severe</td>
                                <td colSpan="5">Treat using antidepressants, psychotherapy or a combination of treatment.</td>
                            </tr>
                            <tr className="text-center">
                                <td className="py-3">20-27</td>
                                <td>Severe</td>
                                <td colSpan="5">Treat using antidepressants with or without psychotherapy.</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="bg-red-300 border-left border-red-950 p-3 my-5">Warning! It seems you are struggling with mental health problem. Check out our helpful resources here.</div>


                    <button className="bg-blue-700 rounded-lg p-3 text-white text-right">Take Another Test</button>
                </div>
            </div>
        </>
    );
}

export default DepressionResult;