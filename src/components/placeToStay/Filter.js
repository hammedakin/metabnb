import React from 'react';
import { filter } from '../data';

const Filter = () => {

    return (
        <section className='filter'>
            <div className="container mt-5">
                {/* <div className="d-flex justify-content-between"> */}
                <div className="d-flex justify-content-between align-items-center all-filters">
                    {filter.map((item, i) =>
                        <div className="px-2" style={{ whiteSpace: "nowrap" }} key={i}>{item}</div>
                    )}
                    <div className="border p-2 br-sm d-flex">
                        Location
                        <i className='bi bi-sliders2 ms-4' />
                    </div>
                    {/* </div> */}

                </div>
            </div>
        </section>
    );
}

export default Filter;