import MainBtn from "../base/MainBtn";

function NoAssessResult() {
    return (
        <div className="m-8 text-center">
            <p>You have not taken any assessments yet.</p>
            <br />
            <MainBtn
                buttontext={"Take Assessment"}
                bgColor={"bg-blue-700"}
                textColor={"text-white"}
            />
        </div>
    );
}

export default NoAssessResult;
