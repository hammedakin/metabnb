import React from 'react';
import { nft } from '../data';
import SingleNft from '../SingleNft';

const BestSellers = () => {

    return (
        <section>
            <div className="container">
                <h4 className="my-5 text-center">
                    Inspiration for your next adventure
                </h4>

                <div className="row">
                    {nft?.slice(0,8)?.map((img, i) =>
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

export default BestSellers;