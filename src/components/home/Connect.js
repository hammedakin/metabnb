import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import wallet from '../../assets/wallet.png'
import metamask from '../../assets/metamask.png'

const Connect = ({ children }) => {

    const [showremove, setShowremove] = useState(false);
    const handleCloseremove = () => setShowremove(false);
    const handleShowremove = () => setShowremove(true);

    return (
        <>
            <span onClick={e => handleShowremove()}>
                {children}
            </span>


            <Modal
                show={showremove}
                onHide={handleCloseremove}
                size="md"
                centered
            >
                <Modal.Header closeButton>
                    <h5 className="fw-bold ml-auto m-0 ms-3">Connect Wallet</h5>
                </Modal.Header>
                <Modal.Body className=" pt-0 my-4 container" >

                    <div className="px-3">

                        <small className="dark-bold-text ">
                            Choose your preferred wallet:
                        </small>

                        <div className="border d-flex justify-content-between align-items-center mt-3 br-sm px-3">
                            <div className='row align-items-center'>
                                <div className="col">
                                    <img src={metamask} alt="Wallet" />
                                </div>
                                <div className="col">
                                    <p className="fw-bold pt-2">
                                        Metamask
                                    </p>
                                </div>
                            </div>
                            <i className='bi bi-chevron-right' />
                        </div>
                        <div className="border d-flex justify-content-between align-items-center mt-3 br-sm px-3">
                            <div className='row align-items-center'>
                                <div className="col">
                                    <img src={wallet} alt="Wallet" />
                                </div>
                                <div className="col">
                                    <p className="fw-bold pt-2">
                                        WallectConnect
                                    </p>
                                </div>
                            </div>
                            <i className='bi bi-chevron-right' />
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Connect;