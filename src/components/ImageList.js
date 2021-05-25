import React from 'react';
import './ImageList.css';


const ImageList=(props)=>{
    const image=props.images.map((i)=>{
        return <img key={i.id} src={i.urls.regular} />
    });

    return(
        <div className='image-list'>{image}</div>
    );
};



export default ImageList;