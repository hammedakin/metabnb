import React from 'react';
import logo_bw from '../assets/logo-bw.png'

const Footer = () => {
    return (
        <footer className="footer-bg footer-text text-center text-lg-start pt-5">
            <div className="container p-4">
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-md-12 mb-4 d-flex flex-column ">
                        <div className=" mb-auto ">
                        <img src={logo_bw} alt="Logo" width="" />
                        </div>
                        <div className="  pt-5 ">
                            <i className='bx bxl-facebook mx-4' />
                            <i className='bi bi-instagram mx-4' />
                            <i className='bi bi-twitter mx-4' />
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                        <h5 className="mb-4">Community</h5>

                        <ul className="list-unstyled mb-0">
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">NFT</a>
                            </li>
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Tokens</a>
                            </li>
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Landlords</a>
                            </li>
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Discord</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                        <h5 className="mb-4">Places</h5>

                        <ul className="list-unstyled">
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Castle</a>
                            </li>
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Farms</a>
                            </li>
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Beach</a>
                            </li>
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Learn more</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                        <h5 className="mb-4">About us</h5>

                        <ul className="list-unstyled">
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Road map</a>
                            </li>
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Creators</a>
                            </li>
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Career</a>
                            </li>
                            <li className='mb-3'>
                                <a href="#!" className="footer-text">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-3">
                    © 2020 Metabnb
                </div>
            </div>

        </footer>
    );
}

export default Footer;