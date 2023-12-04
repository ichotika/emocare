"use client";
import { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import useWindowDimensions from "@/components/base/WindsizeChanger";
import { motion } from "framer-motion";

function Chatbot({ mypersonality, isVisible = false, onClose }) {
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message:
                "Hello, I'm EmoCare AI mental health consultation chatbot!",
            sentTime: "just now",
            sender: "EmoCare",
        },
    ]);
    const [isDesktop, setIsDesktop] = useState(true);
    const myWindow = useWindowDimensions();
    useEffect(() => {
        if (myWindow.width >= 1280) {
            setIsDesktop(true);
            // console.log("this is the window.innerWidth from line 28 ==>>", myWindow.width);
        } else {
            setIsDesktop(false);
            // console.log("this is the window.innerWidth from line 31 ==>>", myWindow.width)
        }
    }, [myWindow]);

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing",
        };
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        setTyping(true);
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) {
        //  chatMessages format { sender: "user" or "ChatGPT", message: "The message content here"}
        // apiMessages format {role: "user" or "assistant" , content: "the message content here"}
        let apiMessages = chatMessages.map((messageObject) => {
            let role =
                messageObject.sender === "EmoCare" ? "assistant" : "user";
            return { role: role, content: messageObject.message };
        });

        const systemMessage = {
            role: "system",
            content: `First of all you should replied back only topic related to mental health issue if it doesn't then you must reply back "Sorry, This is out of my knowledge"
            This is your assigned role as a knowledgeable assistant in mental health, your role is to offer empathetic support. Avoid suggesting professional help immediately. First, listen and understand the user's situation. If needed, guide them through a self-assessment. For critical situations, provide the Canadian depression support number 1-833-456-4566. Additionally, suggest activities suitable for the user's personality type, identified as ${mypersonality}, keeping the response within 50-100 words.`,
        };

        const apiRequestBody = {
            model: "gpt-4",
            messages: [systemMessage, ...apiMessages], // [message1,2,...0]
        };
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + process.env.NEXT_PUBLIC_GPT_API,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
        })
            .then((data) => {
                console.log(data);
                return data.json();
            })
            .then((data) => {
                setMessages([
                    ...chatMessages,
                    {
                        message: data.choices[0].message.content,
                        sender: "EmoCare",
                    },
                ]);
                setTyping(false);
            });
    }

    return isDesktop ? (
        <div className={"flex h-full flex-col justify-between"}>
            <ChatContent
                typing={typing}
                messages={messages}
                handleSend={handleSend}
            />
        </div>
    ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
            <motion.div
                initial={{ y: "10%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{
                    transition: { duration: 0.2, ease: "easeInOut" },
                    opacity: 0,
                    y: "10%",
                }}
                key="chatbot"
                transition={{
                    type: "spring",
                    translate: { duration: 0.5, ease: [0, 1.2, 1, 1] },
                    opacity: { duration: 0.5, ease: "easeOut" },
                }}
                className={
                    "fixed bottom-[90px] right-[30px] ms-2 h-[85%] min-w-[330px] max-w-full"
                }
            >
                <ChatContent
                    typing={typing}
                    messages={messages}
                    handleSend={handleSend}
                />
            </motion.div>
        </div>
    );
}

function ChatContent({ typing, messages, handleSend }) {
    return (
        <MainContainer className="rounded-2xl">
            <ChatContainer>
                <MessageList
                    className="pt-6"
                    typingIndicator={
                        typing ? (
                            <TypingIndicator content="EmoCare is typing" />
                        ) : (
                            ""
                        )
                    }
                >
                    {messages.map((message, i) => {
                        return <Message key={i} model={message} />;
                    })}
                </MessageList>
                <MessageInput
                    attachButton={false}
                    placeholder="Type message here"
                    onSend={handleSend}
                />
            </ChatContainer>
        </MainContainer>
    );
}

export default Chatbot;
