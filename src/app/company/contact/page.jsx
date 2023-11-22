"use client";
import { useState } from "react";

export default function Page() {
    const [success, setSuccess] = useState(false);

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
            setSuccess(true);
        }
    }

    return (
        <main className={"flex flex-col items-center gap-8"}>
            <p>Contact me</p>
            <h1>
                Request for <span>Demo</span>
            </h1>
            <section
                className={
                    "grid w-full grid-cols-2 justify-items-stretch gap-8"
                }
            >
                <div
                    className={
                        "bg-[url('/company_site/ContactBackground.svg')] bg-contain bg-no-repeat md:hidden"
                    }
                >
                    <p>See how Emocare works for you</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="company">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            required
                            placeholder="Your Company Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="numEmps">How many employees?</label>
                        <select
                            name="numEmps"
                            required
                            placeholder="email@example.com"
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="300 or fewer">300 or fewer</option>
                            <option value="300 to 1000">300 to 1000</option>
                            <option value="over 1000">over 1000</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            required
                            placeholder="Your First Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            placeholder="Your First Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="email@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            type="text"
                            name="jobTitle"
                            required
                            placeholder="Eg: Human Resources Manager"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">
                            Ask us anything about EmoCare
                        </label>
                        <textarea
                            name="message"
                            required
                            rows="3"
                            placeholder="Anything you would like to know about"
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </main>
    );
}
