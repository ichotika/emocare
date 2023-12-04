import Image from "next/image";
import ChatIcon from "@/public/icons/chat.svg";
import Chatbot from "./Chatbot";
import { AnimatePresence } from "framer-motion";
export default function ChatBubble({ mypersonality, isVisible, setPopup }) {
    return (
        <div>
            <AnimatePresence>
                {isVisible && (
                    <Chatbot
                        mypersonality={mypersonality}
                        isDesktop={false}
                        isVisible={isVisible}
                        onClose={() => setPopup(!isVisible)}
                    />
                )}
            </AnimatePresence>
            <div
                className="fixed bottom-5 right-5 hidden w-0 cursor-pointer rounded-full bg-p-blue-1 p-4 xl:flex xl:w-auto"
                onClick={() => {
                    setPopup(!isVisible);
                }}
            >
                <Image src={ChatIcon} alt="chaticon" />
            </div>
        </div>
    );
}
