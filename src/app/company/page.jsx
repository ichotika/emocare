import HeroBanner from "@/components/company/heroBanner";
import MediaAndText from "@/components/company/mediaAndText";
import EmployerWidget from "@/app/company/EmployerWidget";
import Image from "next/image";

const baseImageURL = "/company_site";

const employerIntro = {
    heading: "Elevate Your Workforce's Mental Health",
    body: "Mental wellness fuels employee performance and company prosperity. It reduces absenteeism, improves productivity, and fosters a positive workplace culture, leading to long-term success and a competitive edge.",
    src: "/Employer.webp",
};

const employerWidgets = [
    {
        heading: "Manage your dashboard",
        body: "It's your control center for understanding and improving mental wellness within your workforce.",
        src: "/DashBoardWidget.png",
    },
    {
        heading: "Data-Driven Insights",
        body: "Our platform compiles data from Monthly Mental Health assessment tests.",
        src: "/InsightsWidget.png",
    },
    {
        heading: "Tracking Mental Health",
        body: "Generate insights that give you an overview of your organization's mental health status.",
        src: "/ProtectWidget.png",
    },
];

export default function Page() {
    return (
        <main>
            <HeroBanner></HeroBanner>
            <div
                className={
                    "flex flex-col gap-24 p-20 sm:gap-12 sm:px-8 sm:pb-20 sm:pt-10"
                }
            >
                <MediaAndText
                    src={baseImageURL + employerIntro.src}
                    body={employerIntro.body}
                    heading={employerIntro.heading}
                    textRight={false}
                ></MediaAndText>
                <article
                    className={"flex flex-col items-center gap-8 sm:gap-4"}
                >
                    <h2
                        className={
                            "text-center text-5xl font-bold  sm:text-h-xl"
                        }
                    >
                        We provide the Best{" "}
                        <span className={"text-p-blue-1"}>Solution</span>
                    </h2>
                    <p
                        className={
                            "max-w-5xl text-center text-lg font-semibold  sm:font-normal"
                        }
                    >
                        Emocare believe in making mental health support
                        accessible, effective, and tailored to the unique needs
                        of organizations and employees. Our platform seamlessly
                        serves two essential user roles: organizations and
                        employees.
                    </p>
                    <div
                        className={
                            "mt-0 grid max-w-5xl grid-cols-3 gap-28 lg:grid-cols-2 sm:mt-8 sm:grid-cols-1 sm:gap-12"
                        }
                    >
                        {employerWidgets.map((widget, index) => (
                            <EmployerWidget key={index} widget={widget} />
                        ))}
                    </div>
                </article>
                <article
                    className={
                        "mb-10 mt-20 grid grid-cols-2 items-center gap-2 rounded-2xl bg-p-blue-1 px-16 sm:my-0 sm:mt-10 sm:grid-cols-1 sm:gap-0 sm:px-8 sm:py-11"
                    }
                >
                    <Image
                        src={baseImageURL + "/Anonymity.png"}
                        alt="Anonymity"
                        width="0"
                        height="0"
                        sizes="50vw"
                        className="relative bottom-16 -my-4 h-80 w-auto object-contain xl:bottom-8 lg:bottom-0 sm:bottom-24"
                    ></Image>
                    <p
                        className={
                            "hyphens-none text-4xl font-semibold text-g-white-1 xl:text-3xl lg:text-2xl md:text-xl sm:-mt-14 sm:text-center sm:text-2xl"
                        }
                    >
                        Employees&apos; data is treated anonymously to
                        prioritize their privacy and well-being.
                    </p>
                </article>
                <article
                    className={
                        "grid grid-cols-2 items-center lg:grid-cols-1 lg:justify-items-center"
                    }
                >
                    <div
                        className={
                            "flex flex-col gap-11 px-18 lg:order-last sm:px-0"
                        }
                    >
                        <h2
                            className={
                                "font-archivo text-4xl font-bold sm:text-b-2xl"
                            }
                        >
                            <span className={"text-s-orange-1"}>
                                Transforming Lives:{" "}
                            </span>
                            The Essential Step to a Healthier, Happier You
                        </h2>
                        <p
                            className={
                                "font-manrope text-lg font-semibold sm:text-b-base sm:font-normal"
                            }
                        >
                            The &quot;Mental Health Assessment&quot; feature on
                            our platform is a systematic approach to promoting
                            employee well-being. Each month, employees
                            participate in a stress check questionnaire, where
                            they rate their feelings on a scale from 1 to 4to
                            assess their mental state.
                        </p>
                    </div>
                    <Image
                        src={baseImageURL + "/TransformingLives.png"}
                        alt={"Transforming Lives"}
                        width="2000"
                        height="0"
                        sizes="50vw"
                    ></Image>
                </article>
                <article
                    className={
                        "grid grid-cols-2 items-center lg:grid-cols-1 lg:justify-items-center"
                    }
                >
                    <Image
                        src={baseImageURL + "/SelfAwareness.png"}
                        alt={"Self-awareness"}
                        width="2000"
                        height="0"
                        sizes="50vw"
                    ></Image>
                    <div
                        className={
                            "flex flex-col gap-11 px-18 lg:order-last sm:px-0"
                        }
                    >
                        <h2
                            className={
                                "font-archivo text-4xl font-bold sm:text-b-2xl"
                            }
                        >
                            <span className={"text-s-orange-1"}>
                                Self-awareness
                            </span>{" "}
                            is a fundamental step towards better mental health
                        </h2>
                        <p
                            className={
                                "font-manrope text-lg font-semibold sm:text-b-base sm:font-normal"
                            }
                        >
                            Our Personality Assessment is a personalized journey
                            that starts with a series of carefully crafted
                            questions. By exploring your thoughts, preferences,
                            and behaviors, you&apos;ll receive a tailored report
                            that sheds light on your personality.
                        </p>
                    </div>
                </article>
            </div>
        </main>
    );
}
