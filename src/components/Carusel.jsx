import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';


import AliceCarouselImport from "react-alice-carousel"
const AliceCarousel = AliceCarouselImport.default ?? AliceCarouselImport

export const Carusel = ({ credits }) => {
    const items = credits.map(obj =>
        <div key={obj.id}>
            <img className='w-full h-40 object-contain p-1' src={obj.img} alt={obj.alt} />
            {obj.data.map((d, i) =>
                <p className='text-center text-sm' key={i}>{d}</p>
            )}
        </div>
    )

    return (<AliceCarousel mouseTracking items={items}
        responsive={{
            0: { items: 2 },
            600: { items: 3 },
            1024: { items: 4 }
        }}
        controlsStrategy="alternate"
    />)
}