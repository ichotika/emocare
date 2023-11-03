import NoPersonalityResult from "./NoPersonalityResult";
import PersonalityDesc from "./PersonalityDesc";

function PersonalityType({ mypersonality }) {
    const allPersonality = [
        {
            personality: "Architect",
            category: "Analysts",
            type: "INTJ",
            desc: "An Architect (INTJ) is a person with the Introverted, Intuitive, Thinking, and Judging personality traits.",
        },
        {
            personality: "Logician",
            category: "Analysts",
            type: "INTP",
            desc: "A Logician (INTP) is someone with the Introverted, Intuitive, Thinking, and Prospecting personality traits.",
        },
        {
            personality: "Commander",
            category: "Analysts",
            type: "ENTJ",
            desc: "A Commander (ENTJ) is someone with the Extraverted, Intuitive, Thinking, and Judging personality traits.",
        },
        {
            personality: "Debater",
            category: "Analysts",
            type: "ENTP",
            desc: "A Debater (ENTP) is a person with the Extraverted, Intuitive, Thinking, and Prospecting personality traits.",
        },
        {
            personality: "Advocate",
            category: "Diplomats",
            type: "INFJ",
            desc: "An Advocate (INFJ) is someone with the Introverted, Intuitive, Feeling, and Judging personality traits.",
        },
        {
            personality: "Mediator",
            category: "Diplomats",
            type: "INFP",
            desc: "A Mediator (INFP) is someone who possesses the Introverted, Intuitive, Feeling, and Prospecting personality traits.",
        },
        {
            personality: "Protagonist",
            category: "Diplomats",
            type: "ENFJ",
            desc: "A Protagonist (ENFJ) is a person with the Extraverted, Intuitive, Feeling, and Judging personality traits.",
        },
        {
            personality: "Campaigner",
            category: "Diplomats",
            type: "ENFP",
            desc: "A Campaigner (ENFP) is someone with the Extraverted, Intuitive, Feeling, and Prospecting personality traits.",
        },
        {
            personality: "Logistician",
            category: "Sentinels",
            type: "ISTJ",
            desc: "A Logistician (ISTJ) is someone with the Introverted, Observant, Thinking, and Judging personality traits.",
        },
        {
            personality: "Defender",
            category: "Sentinels",
            type: "ISFJ",
            desc: "A Defender (ISFJ) is someone with the Introverted, Observant, Feeling, and Judging personality traits.",
        },
        {
            personality: "Executive",
            category: "Sentinels",
            type: "ESTJ",
            desc: "An Executive (ESTJ) is someone with the Extraverted, Observant, Thinking, and Judging personality traits.",
        },
        {
            personality: "Consul",
            category: "Sentinels",
            type: "ESFJ",
            desc: "A Consul (ESFJ) is a person with the Extraverted, Observant, Feeling, and Judging personality traits.",
        },
        {
            personality: "Virtuoso",
            category: "Explorers",
            type: "ISTP",
            desc: "A Virtuoso (ISTP) is someone with the Introverted, Observant, Thinking, and Prospecting personality traits.",
        },
        {
            personality: "Adventurer",
            category: "Explorers",
            type: "ISFP",
            desc: "An Adventurer (ISFP) is a person with the Introverted, Observant, Feeling, and Prospecting personality traits.",
        },
        {
            personality: "Entrepreneur",
            category: "Explorers",
            type: "ESTP",
            desc: "An Entrepreneur (ESTP) is someone with the Extraverted, Observant, Thinking, and Prospecting personality traits.",
        },
        {
            personality: "Entertainer",
            category: "Explorers",
            type: "ESFP",
            desc: "An Entertainer (ESFP) is a person with the Extraverted, Observant, Feeling, and Prospecting personality traits.",
        },
    ];

    const personality =
        allPersonality.filter((p) => p.type === mypersonality).length > 0
            ? allPersonality.filter((p) => p.type === mypersonality)
            : [];

    return (
        <>
            {personality.length > 0 ? (
                <PersonalityDesc personalityDesc={personality[0]} />
            ) : (
                <NoPersonalityResult personalityLink={"/personality/detail"} />
            )}
        </>
    );
}

export default PersonalityType;
