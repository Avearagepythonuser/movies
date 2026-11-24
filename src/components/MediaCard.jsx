import { useState } from "react";
import {  img_300 } from "../utils";
import { Rating } from "./Rating";
import { MyModal } from "./MyModal";

export function MediaCard({ media, type }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="card bg-base-100 w-full shadow-sm" onClick={()=>setIsOpen(true)}>
                <figure>
                    <img src={media.poster_path ? img_300 + media.poster_path : "placeholder-300x450.png"} alt={media.title || media.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{media.title || media.name || media.original_name}</h2>
                    <div className="flex justify-between pt-2">
                        <span>{media.media_type || (type != "trending" && <Rating vote={media.vote_average}/>)}</span>
                        <span>{media.release_date || media.first_air_date}</span>
                    </div>
                </div>
            </div>
            {isOpen && <MyModal {...{isOpen, setIsOpen, media, type}}/>}
        </>
    )
}