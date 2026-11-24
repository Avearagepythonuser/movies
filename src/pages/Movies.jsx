import { useEffect } from "react"
import { useState } from "react"
import { getSelectedMediaByCateg } from "../utils"
import { Loading } from "../components/Loading"
import { MediaList } from "../components/MediaList"
import { Categories } from "../components/Categories"
import { Pagination } from "../components/Pagination"

export function Movies() {

    const [movies, setMovies] = useState(null)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getSelectedMediaByCateg("movie", selectedCategories, page).then(setMovies)
    }, [selectedCategories, page])

    useEffect(() => {
        setPage(1)
    }, [selectedCategories])
    

    

    return (
        <div>
            <Categories type="movie" {...{selectedCategories, setSelectedCategories}}/>
            {movies ? <MediaList data={movies} type="movie"/> : <Loading/>}
            <Pagination {...{page,setPage}}/>
        </div>
    )
}