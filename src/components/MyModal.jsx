import { useState } from "react";
import { getCredits, getTrailer, img_500 } from "../utils";
import { FaYoutube } from "react-icons/fa";
import { useEffect } from "react";
import { Carusel } from "./Carusel";

export function MyModal({ isOpen, setIsOpen, media, type }) {
    const [trailer, setTrailer] = useState(null)
    const [credits, setCredits] = useState(null)

    useEffect(() => {
        getTrailer(media.media_type || type, media.id).then((objs) => {
            if (!objs || objs.length <= 0) return
            setTrailer(objs[0].key)
        })
        getCredits(media.media_type || type, media.id).then(setCredits)
    }, [])

    console.log(credits)

    return (
        <dialog className={`modal ${isOpen ? "modal-open" : ""}`} >
            <div className="modal-box">
                <img src={img_500 + media.backdrop_path} alt={media.title} />
                <h3 className="font-bold text-lg flex flex-col">
                    <span>{media.title || media.name}</span>
                    <span>{media.first_air_date || media.release_date}</span>
                </h3>
                <p className="py-4">{media.overview}</p>

                {credits && <Carusel credits={credits.slice(0, 10)} />}

                <div className="modal-action">
                    <form method="dialog" className="flex justify-between w-full">
                        {trailer &&
                            <a className="hover:bg-slate-700 aspect-square rounded-2xl flex items-center justify-center" href={`https://youtube.com/watch?v=${trailer}`} target="_blank">
                                <FaYoutube size={30} />
                            </a>}
                        <button className="btn" onClick={() => setIsOpen(false)}>Bezár</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}