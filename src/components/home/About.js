import React from 'react';
import nfts from '../../assets/group2.png'

const About = () => {
    return (
        <section className="py-5 pry light-text" >
            <div className="container my-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-4">
                        <h1 className="mb-5">
                            Metabnb NFTs
                        </h1>
                        <p className="fw-lighter">
                            Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                        </p>
                        <button className="btn pry-text light-bg br-sm btn-lg mt-4">
                            Learn more
                        </button>
                    </div>
                    <div className="col-md-7 text-center">
                        <img src={nfts} alt="NFTs" width="100%" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;