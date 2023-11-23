"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
    const [showModal, setShowModal] = useState(false);

    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const object = Object.fromEntries(formData);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                ...object,
                access_key: "46f33d6e-d05f-459b-92ba-f1a223f135aa",
            }),
        });
        const result = await response.json();
        if (result.success) {
            setShowModal(true);
        }
        setShowModal(true);
    }

    return (
        <main className={"flex flex-col items-center gap-8"}>
            <p className={"font-manrope text-xl font-bold text-p-blue-1"}>
                Contact me
            </p>
            <h1 className={"font-archivo text-5xl font-semibold"}>
                Request for <span className={"text-p-blue-1"}>Demo</span>
            </h1>
            <section
                className={
                    "grid w-full grid-cols-12 justify-items-stretch gap-8"
                }
            >
                <div
                    className={
                        "col-span-5 grid items-center justify-items-center bg-[url('/company_site/ContactBackground.svg')] bg-cover bg-right-top bg-no-repeat lg:hidden"
                    }
                >
                    <p
                        className={
                            "relative bottom-[15%] p-24 text-5xl font-bold text-g-white-1"
                        }
                    >
                        See how Emocare works for you
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className={
                        "px-18 col-span-7 flex flex-col lg:col-span-full"
                    }
                >
                    <div>
                        <label
                            htmlFor="company"
                            className={"font-manrope text-xl"}
                        >
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company"
                            required
                            placeholder="Your Company Name"
                            className={
                                "mb-4 mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="numEmps"
                            className={"font-manrope text-xl"}
                        >
                            How many employees?
                        </label>
                        <select
                            name="numEmps"
                            required
                            placeholder="email@example.com"
                            className={
                                "mb-4 mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
                            }
                        >
                            <option value="" disabled selected hidden>
                                Select your option
                            </option>
                            <option value="300 or fewer">300 or fewer</option>
                            <option value="300 to 1000">300 to 1000</option>
                            <option value="over 1000">over 1000</option>
                        </select>
                    </div>
                    <div className={"grid grid-cols-2 gap-x-4 md:grid-cols-1"}>
                        <div>
                            <label
                                htmlFor="firstName"
                                className={"font-manrope text-xl"}
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                required
                                placeholder="Your First Name"
                                className={
                                    "mb-4 mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
                                }
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="lastName"
                                className={"font-manrope text-xl"}
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                placeholder="Your First Name"
                                className={
                                    "mb-4 mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className={"font-manrope text-xl"}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="email@example.com"
                            className={
                                "mb-4 mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="jobTitle"
                            className={"font-manrope text-xl"}
                        >
                            Job Title
                        </label>
                        <input
                            type="text"
                            name="jobTitle"
                            required
                            placeholder="Eg: Human Resources Manager"
                            className={
                                "mb-4 mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className={"font-manrope text-xl"}
                        >
                            Ask us anything about EmoCare
                        </label>
                        <textarea
                            name="message"
                            required
                            rows="3"
                            placeholder="Anything you would like to know about?"
                            className={
                                "mb-4 mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
                            }
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={
                            "self-end rounded-lg bg-p-blue-1 px-16 py-3 font-bold text-g-white-1 lg:mx-4 lg:self-stretch"
                        }
                    >
                        Send Message
                    </button>
                </form>
            </section>

            <Dialog
                open={showModal}
                onClose={() => {}}
                className="relative z-50"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                <div
                    className={
                        "fixed inset-0 flex w-screen items-center justify-center p-4"
                    }
                >
                    <Dialog.Panel
                        className={
                            "flex w-full max-w-2xl flex-col items-center rounded-lg bg-white px-24 py-12"
                        }
                    >
                        <Image
                            src={"/Success.svg"}
                            alt={"Success"}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="h-16 w-16"
                        ></Image>
                        <Dialog.Title
                            className={"text-center font-manrope text-3xl"}
                        >
                            Request Submitted !
                        </Dialog.Title>
                        <Dialog.Description
                            className={
                                "text-center font-manrope text-2xl text-g-gray-1"
                            }
                        >
                            Thank you for requesting a demo. We&apos;ll be in touch
                            shortly!
                        </Dialog.Description>
                        <button
                            type={"button"}
                            onClick={() => router.push("/company")}
                            className={
                                "bg-p-blue-1 px-8 py-4 text-g-white-1 shadow-sm"
                            }
                        >
                            OK
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </main>
    );
}
