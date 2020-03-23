import './GallerySection.scss';
import React from 'react';
import {FS_IMG_URL} from '~/libs/api';

const GallerySection = (props) => {
    return (
        <div className='gallery-section'>
            <h3>{props.header}</h3>
            <div className="gallery-items-wrap">
                {props.images.map(album => album.map(image => (<div key={image.id} className='gallery-item'>
                    <a href={`${FS_IMG_URL}${image.id}/${image.name}?`} target="_blank"><img
                        src={`${FS_IMG_URL}${image.id}/${image.name}?s=gt`} alt={image.name}/></a>
                </div>)))}
            </div>
        </div>
    );
};

export default GallerySection;
