import HeroBanner from "@/components/company/heroBanner";
import MediaAndText from "@/components/company/mediaAndText";

const baseImageURL= "/company_site";

const featuresContent = [
    {
        heading: "Elevate Your Workforce's Mental Health",
        body: "Mental wellness fuels employee performance and company prosperity. It reduces absenteeism, improves productivity, and fosters a positive workplace culture, leading to long-term success and a competitive edge.",
        src: "/Feature1.png"
    },
    {
        heading: "Transforming Lives: The Essential Step to a Healthier, Happier You",
        body: "The \"Mental Health Assessment\" feature on our platform is a systematic approach to promoting employee well-being. Each month, employees participate in a stress check questionnaire, where they rate their feelings on a scale from 1 to 4to assess their mental state.",
        src: "/Feature1.png"
    },
    {
        heading: "Self-awareness is a fundamental step towards better mental health",
        body: "Our Personality Assessment is a personalized journey that starts with a series of carefully crafted questions. By exploring your thoughts, preferences, and behaviors, you'll receive a tailored report that sheds light on your personality.",
        src: "/Feature1.png"
    },
]


export default function Page() {
    return (
        <>
            <HeroBanner></HeroBanner>
            <div className={"p-10"}>
                {featuresContent.map((feature,index) => <MediaAndText key={index} src={baseImageURL+feature.src} body={feature.body} heading={feature.heading} textRight={index%2!==0}></MediaAndText>)}
            </div>
        </>
    )
}