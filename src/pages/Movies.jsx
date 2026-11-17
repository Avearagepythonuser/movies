import { useEffect } from "react"
import { useState } from "react"
import { getMovies } from "../utils"
import { Loading } from "../components/Loading"
import { MediaList } from "../components/MediaList"

export function Movies() {

    const [movies, setMovies] = useState(null)

    useEffect(() => {
      getMovies().then(setMovies)
      
    }, [])
    

    return (
        <div>
            {movies ? <MediaList data={movies} type="movie"/> : <Loading/>}
        </div>
    )
}