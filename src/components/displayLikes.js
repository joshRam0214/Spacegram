import React from 'react';
import '../styles/App.scss';
import { FaHeart } from 'react-icons/fa';
import ImageDescription from './ImgDes';
export default function DisplayLikes(props) {

    const Btnremove = props.removebtn;
    return (
        <div className='mx-auto w-75'>
            <div className='row'>
                {props.images.map((img) => (
                    <div className="col-3 mb-3 card ImgPost text-dark" key={img.data[0].nasa_id}>
                        <div className='p-2'>
                            <h5>{img.data[0].title}</h5>
                            <h6>Date Created: {img.data[0].date_created.substring(0, 10)}</h6>
                        </div>
                        <img src={img.links[0].href} alt={img.data[0].title} className='card-img-top img-fluid' />
                        <div className='buttonContainer d-flex flex-row justify-content-around p-3'>
                            <ImageDescription imageInfo={img} />
                            <Btnremove classFeatures="btn btn-danger btn-lg" onClickBtn={() => { props.onClickRemove(img) }} tooltip="Remove" heading={<FaHeart />} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
