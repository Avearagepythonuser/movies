
export function Filter({type, setType}) {

    return (
        <div className="flex justify-center gap-4 p-4">
            <label>
                <input type="radio" value="movie" className="radio radio-warning" checked={type == "movie"} onClick={(e)=> setType(e.target.value)}/>
                &nbsp;Filmek
            </label>
            <label>
                <input type="radio" value="tv" className="radio radio-warning" checked={type=="tv"} onClick={(e)=> setType(e.target.value)}/>
                &nbsp;Sorozatok
            </label>
        </div>
    )
} 