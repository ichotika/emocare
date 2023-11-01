import Image from "next/image";

// Need to somehow dynamically import images
export default function MediaAndText({heading, body, src, textLeft}) {
    return (<article className={"grid grid-cols-2 gap-8 items-center"}>
        {textLeft ? (<>
            <div>
                <h2 className={"text-blue-700 text-2xl"}>{heading}</h2>
                <p>{body}</p>
            </div>
            <Image src={src} alt={heading} width="0" height="0" sizes="100vw" className="w-full h-auto"></Image>
        </>) : (<>
            <Image src={src} alt={heading} width="0" height="0" sizes="100vw" className="w-full h-auto"></Image>
            <div>
                <h2 className={"text-blue-700 text-2xl"}>{heading}</h2>
                <p>{body}</p>
            </div>
        </>)}
    </article>);
}