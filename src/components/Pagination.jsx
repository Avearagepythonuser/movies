
export function Pagination({page,setPage, maxPage=10}) {
    const numbers=[...Array(maxPage > 10 ? 10 : maxPage)].map((_,i) =>i+1)

    return (
        <div className="flex w-full justify-center p-6">
            <div className="join">
                {numbers.map(nr=>
                    <button key={nr} className={`join-item btn ${page == nr && "btn-active"}`} onClick={()=>setPage(nr)}>{nr}</button>
                )}
            </div>
        </div>
    )
} 
