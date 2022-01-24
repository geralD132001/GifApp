
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categorias = [ 'Boruto: Naruto Next Generations','Shingeki no Kyojin','Kimetsu no kaiba'];

    const [categorias, setCategorias] = useState(['Kimetsu no kaiba']);

    return (
        <>

            <h2> GifExpertApp </h2>
            <AddCategory setCategorias={ setCategorias} />
            <hr />

            <ol>
                {
                    categorias.map(categoria => (
                        <GifGrid key = { categoria } categoria = { categoria }

                        />
                    ))
                }
            </ol>
        </>
    )
};
