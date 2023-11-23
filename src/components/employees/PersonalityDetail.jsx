import Link from "next/link";
import PersonalityImage from "./PersonalityImage";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function PersonalityDetail({ personality }) {
    return (
        <>
            <div className="p-4">
                <div className="grid grid-cols-3 sm:flex sm:flex-col sm:pb-6">
                    <div className="flex items-start justify-center">
                        <PersonalityImage personality={personality.personality} imgWidth={250} imgHeight={250} />
                    </div>
                    <div className="col-span-2 flex flex-col justify-center">
                        <h1 className="pb-4 font-bold text-h-xl">
                            Your personality is {personality.type}
                        </h1>
                        <p className="text-b-lg">{personality.longdesc}</p>

                    </div>
                </div>

                <div className="text-b-lg" >{documentToReactComponents(personality.description)}</div>

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
                    <button className="rounded-lg bg-blue-700 p-2 text-white hover:bg-blue-500">
                        <Link href={`/employees`}>
                            Go back to dashboard
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default PersonalityDetail;
