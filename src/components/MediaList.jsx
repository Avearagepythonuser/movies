import { getTitle } from "../utils";
import { MediaCard } from "./MediaCard";

export function MediaList({data, type}) {
    return (
        <div>
            <h2 className="text-center font-bold text-2xl p-2 text-gray-300">{getTitle(type)}</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-4 justify-center pt-4 mx-8">
                {data && data.map(obj=> <MediaCard key={obj.id} media={obj} type={type}/>)}
            </div>
        </div>
    )
}