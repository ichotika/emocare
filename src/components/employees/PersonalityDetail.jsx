import Link from "next/link";
import PersonalityImage from "./PersonalityImage";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function PersonalityDetail({ personality }) {
    return (
        <>
            <div className="personality-detail px-12 py-4 sm:px-6">
                <div className="grid grid-cols-3 sm:flex sm:flex-col">
                    <div className="flex items-start justify-center">
                        <PersonalityImage
                            personality={personality.personality}
                            imgWidth={175}
                            imgHeight={175}
                        />
                    </div>
                    <div className="col-span-2 flex flex-col justify-center">
                        <h1 className="pb-4 text-h-xl font-bold">
                            Your personality is {personality.type}
                        </h1>
                        <p className="text-b-lg">{personality.longdesc}</p>
                    </div>
                </div>

                <div className="text-b-lg">
                    {documentToReactComponents(personality.description)}
                </div>

                <p className="pt-8 text-b-lg">
                    For more information, visit{" "}
                    <Link
                        href={`https://www.16personalities.com/${personality.type}-personality`}
                        target={"_blank"}
                    >
                        16 personalities
                    </Link>
                    .
                </p>

                <div className="flex justify-end pt-6">
                    <Link href={`/employees`}>
                        <button className="rounded-lg bg-p-blue-1 p-2 text-white hover:bg-p-blue-2">
                            Go back to dashboard
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PersonalityDetail;
