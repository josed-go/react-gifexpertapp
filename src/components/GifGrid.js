import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    // const [ images, setImages ] = useState([]);
    const { data: images, loading }= useFetchGifs( category );
  
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated__flash">Cargando...</p> }

            <div className="card-grid">
                { 
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            img={ img }
                            { ...img }
                        />
                    )) 
                }
            </div>
        </>
    )
}

export default GifGrid;