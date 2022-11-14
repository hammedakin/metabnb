import React from 'react';
import mbtoken from '../../assets/mbtoken.svg'
import metamask from '../../assets/metamask.svg'
import opensea from '../../assets/opensea.svg'


const Clients = () => {

    const img = [
        mbtoken, metamask, opensea
    ]

    return (
        <section className='pry py-4'>
            <div className="container">
                <div className="row">
                    {img.map((img, i)=>
                    <div className="col text-center" key={i}>
                        <img src={img} alt="token" width="40%" />
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Clients;