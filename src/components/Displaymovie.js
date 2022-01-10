import React from 'react';
import '../styles/App.scss';
import { FaHeart } from 'react-icons/fa';
import {BiDetail} from 'react-icons/bi';
//Add counter variable to control nominations

export default function Displaymovie(props) {
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
                {props.movies.map((movie) => (
                    <div className="col-3 mb-3 card ImgPost text-dark" key={movie.data[0].nasa_id}>
                        <div className='p-2'>
                            <h6>Date Created: {movie.data[0].date_created.substring(0, 10)}</h6>
                        </div>
                        <img src={movie.links[0].href} alt={movie.data[0].title} className='card-img-top img-fluid' />
                        <div className='buttonContainer d-flex flex-row justify-content-around p-3'>
                            <LikeComp 
                                classFeatures="btn btn-danger btn-lg" 
                                disableBtn={check(movie.data[0].nasa_id)} 
                                tooltip="Like" 
                                heading={<FaHeart />}
                                onClickBtn = {() => {props.onClickLike(movie)}}
                            /> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}