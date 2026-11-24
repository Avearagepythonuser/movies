import { useEffect } from "react"
import { useState } from "react"
import { getSelectedMediaByCateg, getTv } from "../utils"
import { Loading } from "../components/Loading"
import { MediaList } from "../components/MediaList"
import { Categories } from "../components/Categories"
import { Pagination } from "../components/Pagination";

export function TVShows() {

    const [tv, setTv] = useState(null)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getSelectedMediaByCateg("tv", selectedCategories, page).then(setTv)
    }, [selectedCategories, page])

    useEffect(() => {
        setPage(1)
    }, [selectedCategories])
    

    return (
        <div>
            <Categories type="tv" {...{selectedCategories, setSelectedCategories}}/>
            {tv ? <MediaList data={tv} type="tv"/> : <Loading/>}
            <Pagination {...{page,setPage}}/>
        </div>
    )
}