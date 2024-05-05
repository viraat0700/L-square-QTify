export const sortByGenres = (data,genre) => {
    if(genre === "all") return data;
    else{
        return data.filter((item) => item.genre.key === genre);
    }
}