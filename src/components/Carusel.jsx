import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300 } from '../utils';

import AliceCarouselImport from "react-alice-carousel"
const AliceCarousel = AliceCarouselImport.default ?? AliceCarouselImport

export const Carusel = ({credits}) => {
    const items = credits.map(obj =>
        <div key={obj.id}>
            <img className='w-full h-40 object-contain p-1' src={obj.profile_path ? img_300 + obj.profile_path : "placeholder-300x450.png"} alt={obj.name} />
            <p className='text-center text-sm'>{obj.name}</p>
        </div>
    )

    return (<AliceCarousel mouseTracking items={items} 
        responsive = {{
                0:{items:2},
                600:{items:3},
                1024:{items:4}
            }} 
        controlsStrategy="alternate"
        />)
}