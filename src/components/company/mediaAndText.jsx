import Image from "next/image";

// Need to somehow dynamically import images
export default function MediaAndText({ heading, body, src, textRight }) {
    return (
        <article
            className={
                "grid grid-cols-2 items-center gap-16 sm:grid-cols-1 sm:gap-4"
            }
        >
            <div className={textRight ? "order-last sm:order-last" : "sm:order-last"}>
                <h2 className={"text-4xl font-bold text-g-black-1"}>
                    {heading}
                </h2>
                <p className={"text-2xl"}>{body}</p>
            </div>
            <Image
                src={src}
                alt={heading}
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
            ></Image>
        </article>
    );
}
