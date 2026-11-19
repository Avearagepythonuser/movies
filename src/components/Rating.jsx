
export function Rating({vote}) {
    return (
        <div className="rating">
            {Array.from({length: 5}, (_, index)=> 
                <div key={index} className="mask mask-star bg-amber-400" aria-label={`${index+1} star`} aria-current={Math.floor(vote/2) == index+1 ? "true" : "false"}></div>
            )}
        </div>
    )
}