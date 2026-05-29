import SearchBar from "@/components/Navbar/searchBar";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between p-6 shadow-md bg-amber-200">
            <Link href={"/"} className="font-bold text-xl">CuyAnimeWeb</Link>
            <SearchBar></SearchBar>
        </div>
    )
}

export default Navbar