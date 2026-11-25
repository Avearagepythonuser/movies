import axios from "axios"

export const img_300 = 'https://image.tmdb.org/t/p/w300'
export const img_500 = 'https://image.tmdb.org/t/p/w500'

const baseURL = "https://api.themoviedb.org/3"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: "hu-HU",
        include_adult: false,
        sort_by: "popularity"
    }
})

export const getTrendings = async (page = 1) => {
    return (await api.get("/trending/all/week", { params: { page } })).data.results
}

export const getMovies = async () => {
    return (await api.get("/discover/movie")).data.results
}

export const getTv = async () => {
    return (await api.get("/discover/tv")).data.results
}

/*export function getVote(vote) {
    return "⭐".repeat(Math.floor(vote/2)) 
}*/

const pageTitle = [
    { type: "trending", title: "Népszerű a héten" },
    { type: "movie", title: "Filmek" },
    { type: "tv", title: "Sorozatok" },
    { type: "search", title: "Keresés" },
    { type: "actors", title: "Színészek" }
]

export const getTitle = (type) => {
    return (pageTitle.find(obj => obj.type == type)).title
}

export const getMedia = async (type, searchText, page = 1) => {
    const response = await api.get(`/search/${type}?query=${searchText}`, { params: { page } })
    return response.data
}

export const getCategories = async (type) => {
    const response = await axios.get(`${baseURL}/genre/${type}/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    return response.data.genres
}

export const getSelectedMediaByCateg = async (type, categories, page = 1) => {
    const response = await api.get(`/discover/${type}?with_genres=${categories.join(",")}`, { params: { page } })
    return response.data.results
}

export const getTrailer = async (type, id) => {
    const response = await api.get(
        `/${type}/${id}/videos`,
    );
    return response.data.results;
};

export const getCredits = async (type, id) => {
    const response = await api.get(
        `/${type}/${id}/credits`,
    );
    return response.data.cast;
};

export const getPopularPeople = async (page=1) => {
    return (await api.get("/person/popular", {params: {page}})).data
}

export const searchPeople = async (query, page) => {
    return (await api.get("/search/person", {params: {page, query}})).data
}

export const getPersonDetails = async (id) => {
    const response = await api.get(`/person/${id}`)
    return response.data
}

export const getPersonCredits = async (id) => {
    const response = (await api.get(`/person/${id}/movie_credits`)).data.cast
    console.log(response);
    return response
}