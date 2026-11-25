import { useState } from "react";
import { img_300 } from "../utils";
import { Rating } from "./Rating";
import { MyModal } from "./MyModal";

export function MediaCard({ media, type }) {

    const [isOpen, setIsOpen] = useState(false)

    const cardData = type == "actors" ? {
        img: media.profile_path ? img_300 + media.profile_path : "placeholder-300x450.png",
        title: media.name || "",
        dataList: media.known_for.map(movie => movie?.title).slice(0, 3)
    } : {
        img: media.poster_path ? img_300 + media.poster_path : "placeholder-300x450.png",
        title: media.title || media.name,
        dataList: [
            media.media_type || (type != "trending" && <Rating vote={media.vote_average} />),
            media.release_date || media.first_air_date
        ]
    }

    return (
        <>
            <div className="card bg-base-100 w-full shadow-sm" onClick={() => setIsOpen(true)}>
                <figure>
                    <img src={cardData.img} alt={cardData.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{cardData.title}</h2>
                    <div className="flex flex-col justify-between pt-2">
                        {cardData.dataList.map((data, index) =>
                            <span key={index}>{data}</span>
                        )}
                    </div>
                </div>
            </div>
            {isOpen && <MyModal {...{ isOpen, setIsOpen, media, type }} />}
        </>
    )
}