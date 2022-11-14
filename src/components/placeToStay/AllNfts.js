import React from 'react';
import { nft } from '../data';
import SingleNft from '../SingleNft';

const AllNfts = () => {
    return (
        <section>
            <div className="container my-5">
             
                <div className="row">
                    {nft.map((img, i) =>
                        <div className="col-md-6 col-lg-3 mb-4">
                        <SingleNft
                                img={img}
                                key={i}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default AllNfts;