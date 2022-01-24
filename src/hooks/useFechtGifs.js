
// Los hooks son funciones -----
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFechtGifs = (categoria) => {

    const [ estado , setEstado ] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs( categoria ).then( imgs => {

            setEstado({
                data: imgs,
                loading: false
            });
            
        })

    }, [ categoria ])


    return estado; // { data:[], loading : true }
}
