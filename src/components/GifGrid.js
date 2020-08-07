import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    // const [count, setcount] = useState(0)
    const {data:images,loading} = useFetchGifs(category);
    // const [images, setImages] = useState([])

    return (
        <>
            <h3 className="animate__animated animate__bounce animate__delay-2s">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            {/* <p>{count}</p>
            <button onClick={()=>{setcount(count+1)}}  >+1</button>  */}
             <div className="card-grid">
                {
                    images.map((img)=>[(
                        <GifGridItem
                        key ={img.id} 
                        // img={img}
                        {...img}  
                        />
                    )])
                }
            </div>
        </>
    )
}
