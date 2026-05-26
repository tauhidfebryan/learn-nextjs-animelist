import SearchBar from "@/components/Navbar/searchBar";

const Navbar = () => {
    return (
        <div className="flex justify-between p-4 shadow-md bg-amber-200">
            <h2 className="font-bold text-xl">CuyAnimeWeb</h2>
            <SearchBar></SearchBar>
        </div>
    )
}

export default Navbar