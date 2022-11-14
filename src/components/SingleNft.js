import React from 'react';


const SingleNft = ({ img }) => {
    return (
        <>
            <div className="card br-md border p-2 shadow-none">
                {/* <div className="heart">
                    <bi className="bi bi-heart-fill me-1" />
                </div> */}
                <div className="">
                    <img src={img} alt="nft" width="100%"
                    />
                </div>
                <div className="pt-3" style={{fontSize:"12px"}}>
                    <div className="d-flex justify-content-between my-1">
                        <p className="m-0 ">
                            Desert king
                        </p>
                        <p className="m-0 fw-bold">
                            1MBT per night
                        </p>
                    </div>
                    <div className="d-flex justify-content-between my-1">
                        <p className="m-0 ">
                            2345km away
                        </p>
                        <p className="m-0 ">
                            available for 2weeks stay
                        </p>
                    </div>
                    <div className="pry-text">
                        <bi className="bi bi-star-fill me-1" />
                        <bi className="bi bi-star-fill me-1" />
                        <bi className="bi bi-star-fill me-1" />
                        <bi className="bi bi-star-fill me-1" />
                        <bi className="bi bi-star-fill me-1" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleNft;