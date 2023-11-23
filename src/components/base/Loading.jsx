import LoadingGif from "@/public/icons/loading.gif";
import Image from "next/image";

function Loading() {
    return (
        <div className="flex h-full w-full grow items-center justify-center xl:h-screen">
            <Image src={LoadingGif} alt="Loading gif" />
        </div>
    );
}

export default Loading;
