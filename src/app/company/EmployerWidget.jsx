import Image from "next/image";

const baseImageURL = "/company_site";
export default function EmployerWidget({ widget }) {
    const { heading, body, src } = widget;

    return (
        <div
            className={
                "flex flex-col items-start gap-7 sm:items-center sm:gap-2 sm:text-center"
            }
        >
            <Image
                src={baseImageURL + src}
                alt={heading}
                width="0"
                height="0"
                sizes="100vw"
                className="h-32 w-auto"
            ></Image>
            <article className={"flex flex-col gap-5"}>
                <h3 className={"text-2xl font-bold font-manrope"}>{heading}</h3>
                <p className={"font-semibold sm:font-normal"}>{body}</p>
            </article>
        </div>
    );
}
