import TopNav from "@/components/company/topNav";
import Footer from "@/components/company/footerNav";


const routesTop = [
    {
        slug: "services",
        name: "How it works"
    },
    {
        slug: "pricing",
        name: "Pricing"
    },
    {
        slug: "team",
        name: "Our team"
    },
]

const routesBottom = [
    {
        slug: "services",
        name: "How it works"
    },
    {
        slug: "pricing",
        name: "Pricing"
    },
    {
        slug: "team",
        name: "Our team"
    },
    {
        slug: "contact",
        name: "Contact"
    },
]

export default function Layout({children}) {
    return (
        <>
            <TopNav routes={routesTop}></TopNav>
            {children}
            <Footer routes={routesBottom}></Footer>
        </>
    )
}