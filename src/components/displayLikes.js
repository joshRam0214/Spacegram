import React from 'react';
import { FaHeart } from 'react-icons/fa';
export default function DisplayNominations(props) {
    // const NominationComponent = props.nominateComp;

    const Btnremove = props.removebtn;

    return (
        <div className='mx-auto w-75'>
            {/* {console.log(props.movies[0].data[0].nasa_id)} */}
            <div className='row'>
                {props.images.map((movie) => (
                    <div className="col-3 mb-3 card ImgPost text-dark" key={movie.data[0].nasa_id}>
                        <div className='p-2'>
                            {/* <h3> Lets go for a <FaBeer />? </h3> */}
                            {/* <h5>{movie.data[0].title}</h5> */}
                            <h6>Date Created: {movie.data[0].date_created.substring(0, 10)}</h6>
                        </div>
                        <img src={movie.links[0].href} alt={movie.data[0].title} className='card-img-top img-fluid' />
                        {/* Note maybe take out description and add tags instead */}
                        {/* <p><b>Description: </b> {movie.data[0].description.substring(0,100)} ...</p> */}
                        <div className='buttonContainer d-flex flex-row justify-content-around p-3'>
                            {/* <button type="button"  title='More Details' class="btn btn-primary btn-lg"><BiDetail /></button> */}
                            <Btnremove classFeatures="btn btn-outline-danger btn-lg" onClickBtn={() => { props.onClickRemove(movie) }} tooltip="Remove" heading={<FaHeart />} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
