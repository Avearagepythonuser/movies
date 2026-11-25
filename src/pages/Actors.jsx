import { useEffect } from "react"
import { useState } from "react"
import { getPopularPeople, searchPeople } from "../utils"
import { MediaList } from "../components/MediaList"
import { Pagination } from "../components/Pagination"
import { SearchBar } from "../components/SearchBar"

export function Actors() {
    const [actors, setActors] = useState(null)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const [searchStr, setSearchStr] = useState("")

    const submit = (setToPageOne = true) => {
        setToPageOne ? setPage(1) : null
        if (searchStr.trim() != "") {
            searchPeople(searchStr.trim(), page).then(data=>{
                setActors(data.results)
                setMaxPage(data.total_pages)
            })
        } else {
            getPopularPeople(page).then(data=>{
                setActors(data.results)
                setMaxPage(data.total_pages)
            })
        }
    }

    useEffect(()=>{
        submit(false)
        console.log("asd")
    }, [page])

    return (
        <div>
            <SearchBar setSearchStr={setSearchStr} submit={submit} searchStr={searchStr} />
            {actors && <MediaList data={actors} type="actors"/>}
            <Pagination {...{page,setPage, maxPage}}/>
        </div>
    )
}