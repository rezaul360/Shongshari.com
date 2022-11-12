import React from 'react';
import { Modal, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openDetailsModal, singleModalDataAction } from '../../redux/actions/modal/modalAct';

const DetailsModal = () => {
    //  isDetailsModalOpen
    const { isDetailsModalOpen, singleModalData } = useSelector((state) => state.modalValue);
    console.log(singleModalData)
    const dispatch = useDispatch()
    const onHide = () => {
        dispatch(openDetailsModal(false))
        dispatch(singleModalDataAction({}))

    }


    return (
        <div>
            <div className=" d-flex justify-content-center">
                <Modal
                    show={isDetailsModalOpen}
                    size="lg"
                    onHide={onHide}
                    className="modal filter-p"
                    id="exampleModalCenter2"
                >
                    <div className="modal-content logi__modal">
                        <Modal.Header
                            closeButton
                            className=" justify-content-between align-items-center logiHeader"
                        >
                            <Modal.Title
                                className="modal-title text-center logiTitle"
                                id="exampleModalCenterTitle"
                            >
                                Details page
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal-body">
                            <section className="blog-page single-blog-page">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="user-setting-section p-0 m-0">
                                                <div className="input-info-box">
                                                    <div className="booking__info mb-5">
                                                        <div className="bking__img">
                                                            <img src={singleModalData?.profile_photo} alt="bking__img" />
                                                        </div>
                                                        <div className="bking__content">
                                                            <ul>
                                                                <li>
                                                                    <p>
                                                                        <span>Name</span> {singleModalData?.name}
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                        <span>Email</span> {singleModalData?.email}
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                        <span>Phone</span> {singleModalData?.phone}
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                        <span>Ongoing Case</span> 5
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                            <div className="buttons">
                                                                <span style={{ marginRight: "20px" }}>$5200</span>

                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-4 mb-4'>
                                            <h3>All Services</h3>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="">
                                                <Table striped responsive bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Service Name</th>
                                                            <th>Price</th>
                                                            <th>Details</th>
                                                            {/* <th colspan="2">Service description</th> */}
                                                            <th>Image</th>

                                                        </tr>
                                                    </thead>
                                                    {singleModalData?.services?.map((law) => (
                                                        <tbody>
                                                            <tr>
                                                                <td>{law?.name}</td>
                                                                <td>{law.price}</td>
                                                                <td>{law.details}</td>
                                                                <td width={100}>
                                                                    <img className="w-100" src={law?.image} alt="" />
                                                                </td>
                                                                {/* <td colspan="2">{law.service.description}</td> */}

                                                            </tr>
                                                        </tbody>
                                                    ))}
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </Modal.Body>
                    </div>
                </Modal>
            </div>
        </div>

    );
};

export default DetailsModal;