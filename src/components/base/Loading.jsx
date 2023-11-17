import LoadingGif from "@/public/icons/loading.gif";
import Image from "next/image";

function Loading() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <Image src={LoadingGif} alt="Loading gif" />
        </div>
    );
}

export default Loading;
