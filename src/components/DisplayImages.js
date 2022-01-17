import React from 'react';
import '../styles/App.scss';
import { FaHeart } from 'react-icons/fa';
import ImageDescription from './ImgDes';

export default function DisplayImages(props) {
    const LikeComp = props.likedComp;
    const check = (nasaID) => {
        for (let x = 0; x < props.compareLike.length; x++) {
            if (props.compareLike[x].data[0].nasa_id === nasaID) {
                return true;
            }
        }
        return false;
    }
    return (
        <div className='mx-auto w-75'>
            <div className='row'>
                {props.imgList.map((img) => (
                    <div className="col-3 mb-3 card ImgPost text-dark" key={img.data[0].nasa_id}>
                        <div className='p-2'>
                            {/* <h6>Date Created: {img.data[0].date_created.substring(0, 10)}</h6> */}
                            <h6>{img.data[0].title} </h6>
                        </div>
                        <img src={img.links[0].href} alt={img.data[0].title} className='card-img-top img-fluid' />
                        <div className='buttonContainer d-flex flex-row justify-content-around p-3'>
                            <ImageDescription imageInfo={img} />
                            <LikeComp
                                classFeatures="btn btn-danger btn-lg"
                                disableBtn={check(img.data[0].nasa_id)}
                                tooltip="Like"
                                heading={<FaHeart />}
                                onClickBtn={() => { props.onClickLike(img) }}
                            />
                        </div>
                        <div className='d-flex flex-row'>
                            <h6 className='m-1'><span className="badge badge-pill badge-dark">Tags</span></h6>
                            <div className='d-flex flex-row flex-wrap'>
                                {img.data[0].keywords.map((tags) =>(
                                    <h6 className='m-1 card-text'><span className="badge badge-pill badge-info">{tags}</span></h6>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}