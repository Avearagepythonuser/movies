import { useState } from "react"
import { Filter } from "../components/Filter"
import { SearchBar } from "../components/SearchBar"
import { getMedia } from "../utils"
import { MediaList } from "../components/MediaList"
import { Pagination } from "../components/Pagination"
import { useEffect } from "react"

export function SearchMedia() {
    const [type, setType] = useState("movie")
    const [searchStr, setSearchStr] = useState("")
    const [medias, setMedias] = useState(null)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    const submit = () => {
        setMedias(null)
        getMedia(type, searchStr, page).then((data)=>{
            setMedias(data.results)
            setMaxPage(data.total_pages)
        })
        setPage(1)
    }

    useEffect(() => {
        getMedia(type,searchStr, page).then((data)=>{
            setMedias(data.results)
        })
    }, [page])

    return (
        <div className="min-h-screen">
            <Filter type={type} setType={setType} />
            <SearchBar setSearchStr={setSearchStr} submit={submit} searchStr={searchStr} />
            {medias && medias.length > 0 &&
                <div>
                    <MediaList data={medias} type={type} />
                    <Pagination {...{ page, setPage, maxPage}} />
                </div>
            }
        </div>
    )
}