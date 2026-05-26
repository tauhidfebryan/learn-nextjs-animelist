import Image from "next/image";
import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList";

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

  return (
    <>
      <Header title={"PALING POPULER"} linkTitle={"LIHAT SEMUA"} linkHref={"/populer"}/>
      <AnimeList api={topAnime} />
    </>
  );
}

export default Page