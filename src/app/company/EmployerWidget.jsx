import Image from "next/image";

const baseImageURL = "/company_site";
export default function EmployerWidget({ widget }) {
    const { heading, body, src } = widget;

    return (
        <div className={"flex flex-col items-start sm:items-center sm:text-center gap-7"}>
            <Image
                src={baseImageURL + src}
                alt={heading}
                width="0"
                height="0"
                sizes="100vw"
                className="h-32 w-auto"
            ></Image>
            <h3 className={"text-2xl font-bold font-manrope"}>{heading}</h3>
            <p className={"font-semibold"}>{body}</p>
        </div>
    );
}
