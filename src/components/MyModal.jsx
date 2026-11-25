import { useState } from "react";
import { getCredits, getPersonCredits, getPersonDetails, getTrailer, img_500 } from "../utils";
import { FaYoutube } from "react-icons/fa";
import { useEffect } from "react";
import { Carusel } from "./Carusel";
import { img_300 } from '../utils';

export function MyModal({ isOpen, setIsOpen, media, type }) {
    const [trailer, setTrailer] = useState(null)
    const [credits, setCredits] = useState(null)

    const [actorData, setActorData] = useState(null)
    const [movies, setMovies] = useState(null)


    useEffect(() => {
        if (type == "actors") {
            getPersonDetails(media.id).then(setActorData)
            getPersonCredits(media.id).then(setMovies)
            return
        }
        getTrailer(media.media_type || type, media.id).then((objs) => {
            if (!objs || objs.length <= 0) return
            setTrailer(objs[0].key)
        })
        getCredits(media.media_type || type, media.id).then(setCredits)
    }, [])

    const modalData = type == "actors" ? {
        img: img_500 + media.profile_path || "placeholder-300x450.png",
        titleData: [
            actorData?.name,
            `Születés: ${actorData?.birthday} ${actorData?.place_of_birth}`
        ],
        overview: actorData?.biography,
        caruselDisplay: movies?.slice(0,10).map(movie=> {
            return {
                id: movie.id,
                img: img_300 + movie.poster_path || "",
                alt: movie.title,
                data : [
                    movie.title,
                    movie.release_date,
                    movie.character,
                ]

            }
        })
    } : {
        img: img_500 + media.backdrop_path || "placeholder-300x450.png",
        titleData: [
            media.title || media.name,
            media.first_air_date || media.release_date
        ],
        overview: media.overview,
        caruselDisplay: credits?.slice(0, 10).map(data=> {
            return {
                id: data.id,
                img: data.profile_path ? img_300 + data.profile_path : "placeholder-300x450.png",
                alt: data.name,
                data: [
                    data.name
                ]
            }
        })
    }


    return (
        <dialog className={`modal ${isOpen ? "modal-open" : ""}`} >
            <div className="modal-box">
                <img src={modalData.img} />
                <h3 className="font-bold text-lg flex flex-col">
                    {modalData.titleData.map((data, i)=> 
                        <span key={i}>{data}</span>
                    )}
                </h3>
                <p className="py-4">{modalData.overview}</p>

                {(credits || movies) && <Carusel credits={modalData.caruselDisplay} />}

                <div className="modal-action">
                    <form method="dialog" className="flex justify-center gap-8 w-full">
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