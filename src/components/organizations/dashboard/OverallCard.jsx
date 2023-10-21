"use client";

const OverallCard = ({}) => {
    return (
        <div className="flex justify-between">
            <div className="flex w-3/4">


            <div className="flex flex-grow p-1">
                <a
                    href="#"
                    className="block max-w-sm flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Total Employees
                    </p>
                    <div className="mt-3 flex flex-grow justify-between">
                        <h4 className="text-5xl font-bold text-white">150</h4>
                        <p className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            +16
                        </p>
                    </div>
                </a>
            </div>

            <div className="flex flex-grow p-1">
                <a
                    href="#"
                    className="block max-w-sm flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Active Employee
                    </p>
                    <div className="mt-3 flex justify-between">
                        <h4 className="text-5xl font-bold text-white">80%</h4>
                        <p className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            +20%
                        </p>
                    </div>
                </a>
            </div>

            <div className="flex flex-grow p-1">
                <a
                    href="#"
                    className="block max-w-sm flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Total Assessments
                    </p>
                    <div className="mt-3 flex justify-between">
                        <h4 className="text-5xl font-bold text-white">725</h4>
                        <p className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            -11%
                        </p>
                    </div>
                </a>
            </div>
       
        </div>

        </div>
    );
};

export default OverallCard;
