import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {

    const { keyword } = await params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
    const searchAnime = await response.json()

    return (
        <>
            <Header title={`Pencarian Untuk ${keyword}`}/>
            <AnimeList api={searchAnime} />
        </>
    );
}

export default Page