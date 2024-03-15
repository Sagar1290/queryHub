import SearchHeader from "../components/SearchHeader";

export const metadata = {
    title: "Search Results",
    description: "Results shown here",
};

export default function Layout({ children }) {

    return (
        <>
            <SearchHeader />
            {children}
        </>
    )

}