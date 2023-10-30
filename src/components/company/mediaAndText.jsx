import Image from "next/image";

export default function MediaAndText({heading,body,src,textLeft}) {
    return (
        <article className={"grid grid-cols-2 gap-8"}>
            {children[0]}
            {children[1]}
        </article>
    );
}