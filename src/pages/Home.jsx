import { useEffect } from "react"
import { useState } from "react"
import { getTrendings, img_300 } from "../utils"
import { Loading } from "../components/Loading"
import { MediaList } from "../components/MediaList"

export function Home() {
    const [trendings, setTrendings] = useState(null)


    useEffect(() => {
      getTrendings().then(setTrendings)
    }, [])
    

    return (
        <div>
            {trendings ? <MediaList data={trendings} type="trending"/> : <Loading/>}
        </div>
    )
}