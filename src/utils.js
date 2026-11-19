import axios from "axios"

export const img_300='https://image.tmdb.org/t/p/w300'
export const img_500='https://image.tmdb.org/t/p/w500'

const api=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params: {
        api_key:import.meta.env.VITE_TMDB_API_KEY,
        language:"hu-HU",
        include_adult:false,
        sort_by: "popularity"
    }
})

export const getTrendings = async ()=> {
    return (await api.get("/trending/all/week")).data.results
}

export const getMovies = async ()=> {
    return (await api.get("/discover/movie")).data.results
}

export const getTv = async ()=> {
    return (await api.get("/discover/tv")).data.results
}

/*export function getVote(vote) {
    return "⭐".repeat(Math.floor(vote/2)) 
}*/

const pageTitle=[
    {type: "trending", title: "Népszerű a héten"},
    {type: "movie", title: "Filmek"},
    {type: "tv", title: "Sorozatok"},
    {type: "search", title: "Keresés"}
]

export const getTitle =(type)=> {
    return (pageTitle.find(obj=> obj.type == type)).title
}

export const getMedia = async (type, searchText)=> {
    const response = await api.get(`/search/${type}?query=${searchText}`)
    console.log(response);
    return response.data.results
}