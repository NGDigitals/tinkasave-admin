/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {isEmpty} from 'lodash';
import Loader from "react-loader-spinner";
import ReactRoundedImage from "react-rounded-image";
import { Button, Modal} from 'react-bootstrap';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import UserService from '../../../services/UserService';

// import SettingsNav from '../../element/settings-nav';

const LIMIT = 25;

function Users() {

    const isRendered = useRef(false);
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLast, setIsLast] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({})
    const [sessionExpired, setSessionExpired] = useState(false);
    // const { targetRef, openModal, closeModal, isOpen, Modal } = useModal()

    useEffect(() => {
        isRendered.current = true;
        if (navigator.onLine) {fetchData(0)}
        return () => {
            isRendered.current = false;
        };
    }, []);

    const fetchData = async (page) => {
        try {
            setIsLoading(true);
            const response = await UserService.fetch(page, LIMIT);
            if (isRendered.current) {
                const {
                    content, total,
                  } = response.data.result;
                setUsers(page === 0 ? [...content] : [...users, ...content]);
                setCurrentPage(page);
                // setTotalItems(total)
                setIsLoading(false);
                setIsLoaded(true);
            }
        } catch (error) {
          if (isRendered.current) {
            setIsLoading(false);
            if (error.response && error.response.status === 401)
              setSessionExpired(true);
          }
        }
    };

    const openModal = (user) => {
        setModalData(user);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <Header2 expired={sessionExpired} />
            <Sidebar />
            <PageTitle />
            {(!isLoading && isLoaded && !isEmpty(users)) ? (
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        {/* <div className="col-xl-3 col-md-4">
                            <SettingsNav />
                        </div> */}
                        <div className="col-xl-9 col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Active Users</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form">
                                        <ul className="linked_account">
                                            {users.map((u) => (
                                            <li key={u.id}>
                                                <div className="row">
                                                    <div className="col-9">
                                                        <div className="media" style={{justifyContent: 'center', 
                                                            alignItems: 'flex-start', flex:1}}>
                                                            <span className="mr-3">
                                                                <ReactRoundedImage image={u.image} roundedSize="0" imageWidth="50" imageHeight="50" />
                                                            </span>
                                                            <div className="media-body">
                                                                <h4 className="mt-0 mb-1">{u.first_name + ' ' + u.last_name}</h4>
                                                                <h5 className="mt-0 mb-1"><span>{u.phone}, </span><span>{u.email}</span></h5>
                                                                {/* <p><span>{u.phone}, </span><span>{u.email}</span></p> */}
                                                                {/* <h6 className="mt-1 mb-1">Last Login: 12th June, 2021 10:03AM</h6> */}
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={'#'} onClick={() => openModal(u)}>Airtime/Data Savings ({u.count.airtime})</Link></span>
                                                                </div>
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={'#'}>Tinka Spend ({u.count.atm})</Link></span>
                                                                </div>
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={`/services/buddie`}>Tinka Buddie ({u.count.buddie})</Link></span>
                                                                </div>
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={'#'}>Tinka GSave ({u.count.group})</Link></span>
                                                                </div>
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={'#'}>Tinka Smooth ({u.count.smooth})</Link></span>
                                                                </div>
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={'#'}>Tinka Kids ({u.count.kid})</Link></span>
                                                                </div>
                                                            </div>
                                                            <div className="edit-optio">
                                                                <Link to={'#'}><i className="fa fa-eye"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="verify">
                                                            <div className="verified">
                                                                <span><i className="la la-check"></i></span>
                                                                <Link to={'#'}>Verified</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            ))}
                                        </ul>
                                        {/* {isOpen && (
                                            <Modal>
                                                <div className="content-body">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <button onClick={closeModal}>close</button>
                                                            Whatever you put here will be centered to the middle of the screen.
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 100,
            }}>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={0} //3 secs
            /></div>}
        </>
    )
}

export default Users;