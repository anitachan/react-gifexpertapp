import React  from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem'


export const GifGrid = ( { category }) => {

  
    const { data, loading } = useFetchGifts( category );


    // useEffect( () => {
    //     getGifts( category )
    //         .then( setImages);
    // }, [ category ]); 
   
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                { 
                    data.map(  (img)  => (
                        <GifGridItem 
                            key= { img.id }
                            { ...img } />
                    ))
                }
            </div>
        </>
    )
}
