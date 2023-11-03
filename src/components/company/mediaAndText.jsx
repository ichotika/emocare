import Image from "next/image";

// Need to somehow dynamically import images
export default function MediaAndText({heading, body, src, textRight}) {
    return (<article className={"grid grid-cols-2 sm:grid-cols-1 gap-16 sm:gap-4 items-center"}>
        <div className={textRight ? "order-last sm:order-none" : ""}>
            <h2 className={"text-blue-500 text-4xl font-bold"}>{heading}</h2>
            <p className={"text-2xl"}>{body}</p>
        </div>
        <Image src={src} alt={heading} width="0" height="0" sizes="100vw" className="w-full h-auto"></Image>
    </article>);
}