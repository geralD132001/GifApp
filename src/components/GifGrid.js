
import React from 'react';
import { useFechtGifs } from '../hooks/useFechtGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    const { data:images , loading} = useFechtGifs( categoria );

    return (
        <>
        
            <h3 className= "animate__animated animate__fadeInRight"> {categoria} </h3>

            { loading && <p className="animate__animated animate__flash"> Cargando... </p> }

            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>

        </>
    )
};
