import TopNav from "@/components/company/topNav";
import Footer from "@/components/company/footerNav";

const routesTop = [
    {
        slug: "team",
        name: "Our team",
    },
    {
        slug: "pricing",
        name: "Pricing",
    },
];

const routesBottom = [
    {
        slug: "pricing",
        name: "Pricing",
    },
    {
        slug: "team",
        name: "Meet Our team",
    },
    {
        slug: "contact",
        name: "Contact",
    },
];

export default function Layout({ children }) {
    return (
        <>
            <TopNav routes={routesTop}></TopNav>
            <div className={"sm:mt-[50px]"}> {children}</div>
            <Footer routes={routesBottom}></Footer>
        </>
    );
}
