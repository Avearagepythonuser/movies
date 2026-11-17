import { useEffect } from "react"
import { useState } from "react"
import { getTv } from "../utils"
import { Loading } from "../components/Loading"
import { MediaList } from "../components/MediaList"

export function TVShows() {

    const [tv, setTv] = useState(null)

    useEffect(() => {
      getTv().then(setTv)
      
    }, [])
    

    return (
        <div>
            {tv ? <MediaList data={tv} type="tv"/> : <Loading/>}
        </div>
    )
}