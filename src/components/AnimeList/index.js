const AnimeList = ({ api }) => {
    return (
        <div className="grid grid-cols-4 gap-4 px-4">
            {api.data?.map((anime) => (
                <div key={anime.mal_id} className="">
                    {/* Anime Image */}
                    <img
                        src={anime.images.webp.image_url}
                        alt={anime.title}
                        className="w-full h-64 object-cover"></img>

                    {/* Anime Title */}
                    <h3 className="font-bold bg-gray-700">{anime.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default AnimeList