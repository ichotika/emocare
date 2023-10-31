import HalfDoughnutChart from "@/components/employees/HalfDoughnutChart";

const AnxietyResult = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div className="">
                    <HalfDoughnutChart headtitle={``} levelPercent={12} levelText={`Moderate`} levelNum={12} />
                </div>
                <div className="flex flex-col justify-center">
                    <h5>Your depression score is 12</h5>
                    <p>Use clinical judgment about treatment, based on patient s duration of symptoms and functional impairment.</p>
                </div>
            </div>
        </>
    );
}

export default AnxietyResult;