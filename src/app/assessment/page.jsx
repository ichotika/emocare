import Questionnaire from "@/components/assessment/mentalassessment/Questionnaire";
import Instruction from "@/components/assessment/mentalassessment/Instruction";

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