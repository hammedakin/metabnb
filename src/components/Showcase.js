import React from 'react';
import hero from '../assets/hero.png'

const Showcase = () => {
    return (
        <section className="showcase">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="col-lg-11 dark-bold-text ">
                            <h1 className='fw-light '>
                                Rent a
                                <span className="pry-text fw-bold"> Place </span>
                                away from
                                <span className="pry-text fw-bold"> Home </span>
                                in the
                                <span className="pry-text fw-bold"> Metaverse </span>
                            </h1>
                            <p className='mt-3'>
                                we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                            </p>


                            <div className="my-3">
                                <form className='search-form d-flex mt-5'>
                                    <input
                                        type="text"
                                        className='form-style w-100'
                                        placeholder='Search for location'
                                    />
                                    <button className="btn form-btn shadow-none">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image">

                            <img src={hero}
                                alt="NFT"
                                className=''
                                width="100%"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Showcase;