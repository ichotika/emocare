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
        heading: "Elevate Your Workforce's Mental Health",
        body: "Mental wellness fuels employee performance and company prosperity. It reduces absenteeism, improves productivity, and fosters a positive workplace culture, leading to long-term success and a competitive edge.",
        src: "/Feature1.png"
    },
    {
        heading: "Elevate Your Workforce's Mental Health",
        body: "Mental wellness fuels employee performance and company prosperity. It reduces absenteeism, improves productivity, and fosters a positive workplace culture, leading to long-term success and a competitive edge.",
        src: "/Feature1.png"
    },
    {
        heading: "Elevate Your Workforce's Mental Health",
        body: "Mental wellness fuels employee performance and company prosperity. It reduces absenteeism, improves productivity, and fosters a positive workplace culture, leading to long-term success and a competitive edge.",
        src: "/Feature1.png"
    },

]


export default function Page() {
    return (
        <>
            <HeroBanner></HeroBanner>
            <div className={"p-10"}>
                {featuresContent.map((feature,index) => <MediaAndText key={index} src={baseImageURL+feature.src} body={feature.body} heading={feature.heading} textLeft={index%2===0}></MediaAndText>)}
            </div>
        </>
    )
}