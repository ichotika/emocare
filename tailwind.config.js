/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            spacing: {
                12: "3rem",
                14: "3.5rem",
                16: "4rem",
                18: "4.5rem",
                20: "5rem",
                24: "6rem",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-org":
                    "linear-gradient(180deg, rgba(0,39,97,1) 0%, rgba(0,78,134,1) 100%)",
                "gradient-blue":
                    "linear-gradient(90deg, rgba(0,102,255,1) 0%, rgba(77,147,251,1) 100%)",
                "gradient-orange":
                    "linear-gradient(90deg, rgba(255,92,0,1) 0%, rgba(255,140,73,1) 100%)",
            },
            colors: {
                "p-blue-1": "#0066FF",
                "p-blue-2": "#4D93FB",
                "p-blue-3": "#A6C8F7",
                "p-blue-4": "#CCDEF5",
                "p-blue-5": "#F2F4F4",
                "p-blue-6": "#F4F9FF",
                "s-orange-1": "#FF5C00",
                "s-orange-2": "#FF8C49",
                "s-orange-3": "#FFC49E",
                "s-orange-4": "#FFDCC2",
                "o-navy-1": "#002761",
                "o-joy-1": "#FFC700",
                "o-joy-2": "#fffefa",
                "o-success-1": "#0ECD9E",
                "o-success-2": "#DBF5E7",
                "o-error-1": "#F5003D",
                "o-error-2": "#FED6D7",
                "g-black-1": "#0E0E17",
                "g-gray-1": "#6E6E74",
                "g-gray-2": "#C7C8D1",
                "g-gray-3": "#EEEEF1",
                "g-gray-4": "#F6F6F8",
                "g-gray-5": "#F5F5F5",
                "g-white-1": "#FFFFFF",
            },
            fontFamily: {
                archivo: ["var(--font-archivo)"],
                manrope: ["var(--font-manrope)"],
            },
            fontSize: {
                // Header font sizes
                "h-xl": "1.875rem", // 30px
                "h-2xl": "2.25rem", // 36px
                "h-3xl": "3rem", // 48px
                "h-4xl": "3.75rem", // 60px
                "h-5xl": "4.5rem", // 72px
                "h-6xl": "6rem", // 96px

                // Body font sizes
                "b-xs": "0.75rem", // 12px
                "b-sm": "0.875rem", // 14px
                "b-base": "1rem", // 16px
                "b-lg": "1.125rem", // 18px
                "b-xl": "1.25rem", // 20px
                "b-2xl": "1.5rem", // 24px
                "b-3xl": "1.875rem", // 30px
                "b-4xl": "2.25rem", // 36px
                "b-5xl": "3rem", // 48px
            },
        },
    },
    plugins: [],
};
