import { useState } from "react"
import { Filter } from "../components/Filter"
import { SearchBar } from "../components/SearchBar"
import { getMedia } from "../utils"
import { MediaList } from "../components/MediaList"


export function SearchMedia() {
    const [type, setType] = useState("movie")
    const [searchStr, setSearchStr] = useState("")
    const [medias, setMedias] = useState(null)

    const submit = () => {
        getMedia(type, searchStr).then(setMedias)
    }

    return (
        <div className="min-h-screen">
            <Filter type={type} setType={setType}/>
            <SearchBar setSearchStr={setSearchStr} submit={submit} searchStr={searchStr}/>
            <div>
                {medias &&
                    <MediaList data={medias} type={"search"}/>
                }
            </div>
        </div>
    )
}