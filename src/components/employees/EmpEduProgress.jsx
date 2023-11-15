import EduProgressBar from "../educations/EduProgressBar";
import NoResultEducation from "../educations/NoResultEducation";

function EmpEduProgress({alleduPercent, resourceEdu, deprEdu, anxietyEdu, burnoutEdu}) {
    return (
        <div>
            {alleduPercent > 0 ? (
                <EduProgressBar category={"All"} percent={alleduPercent} />
            ) : (
                <NoResultEducation categoryTitle={"All"} />
            )}
            <div className="flex gap-2 sm:flex-col">
                {resourceEdu > 0 ? (
                    <EduProgressBar
                        category={"Resources"}
                        percent={resourceEdu}
                    />
                ) : (
                    <NoResultEducation categoryTitle={"Resource"} />
                )}
                {deprEdu > 0 ? (
                    <EduProgressBar category={"Depression"} percent={deprEdu} />
                ) : (
                    <NoResultEducation categoryTitle={"Depression"} />
                )}
            </div>
            <div className="flex gap-2 sm:flex-col">
                {anxietyEdu > 0 ? (
                    <EduProgressBar category={"Anxiety"} percent={anxietyEdu} />
                ) : (
                    <NoResultEducation categoryTitle={"Anxiety"} />
                )}
                {burnoutEdu > 0 ? (
                    <EduProgressBar category={"Burnout"} percent={burnoutEdu} />
                ) : (
                    <NoResultEducation categoryTitle={"Burnout"} />
                )}
            </div>
        </div>
    );
}

export default EmpEduProgress;
