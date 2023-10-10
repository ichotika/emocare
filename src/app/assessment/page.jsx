import Questionnaire from "@/components/assessment/Questionnaire";
import Instruction from "@/components/assessment/Instruction";

const Assessment = () => {
    return (
        <>
            <div className="App" style={{ backgroundColor: "goastWhite" }}>
                {/* Header component creating */}
                {/* <Header /> */}

                {/* Instruction Descrition Component */}
                <Instruction />

                {/* form component */}
                <Questionnaire />
            </div>
        </>
    );
}

export default Assessment;