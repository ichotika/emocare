import LoadingGif from "@/components/base/Loading";
function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
            <LoadingGif />
        </div>
    );
}

export default Loading;
