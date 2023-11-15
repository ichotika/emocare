import { useEffect, useState } from "react";
import EduProgressBar from "./EduProgressBar";
import NoResultEducation from "./NoResultEducation";

function EduCategoryProgress({
    currentTab,
    alleduPercent,
    resourceEdu,
    deprEdu,
    anxietyEdu,
    burnoutEdu,
}) {
    const [eduPercent, setEduPercent] = useState(alleduPercent);

    useEffect(() => {
        const getPercent = () => {
            switch (currentTab) {
                case "Resource":
                    setEduPercent(resourceEdu);
                    break;

                case "Depression":
                    setEduPercent(deprEdu);
                    break;

                case "Anxiety":
                    setEduPercent(anxietyEdu);
                    break;

                case "Burnout":
                    setEduPercent(burnoutEdu);
                    break;

                default:
                    setEduPercent(alleduPercent);
                    break;
            }
        };
        getPercent();
    }, [
        alleduPercent,
        anxietyEdu,
        burnoutEdu,
        currentTab,
        deprEdu,
        resourceEdu,
    ]);

    return (
        <div>
            {eduPercent > 0 ? (
                <EduProgressBar
                    category={"Your progress in this module"}
                    percent={eduPercent}
                />
            ) : (
                <NoResultEducation
                    categoryTitle={"Your progress in this module"}
                />
            )}
        </div>
    );
}

export default EduCategoryProgress;
