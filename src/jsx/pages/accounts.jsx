import React, {  } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';

// import SettingsNav from '../element/settings-nav';



function SettingsAccount() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
            <div className="container-fluid">
                <div className="row">
                    {/* <div className="col-xl-3 col-md-4">
                        <SettingsNav />
                    </div> */}
                    <div className="col-xl-9 col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Active Accounts</h4>
                            </div>
                            <div className="card-body">
                                <div className="form">
                                    <ul className="linked_account">
                                        <li>
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="media">
                                                        <span className="mr-3"><i className="fa fa-user"></i></span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1">Yemi Oyelaran</h5>
                                                            <p><span>+2347037906418, </span><span>ngdigitalsn@gmail.com</span></p>
                                                            <h6 className="mt-1 mb-1">Super Admin</h6>
                                                        </div>
                                                        <div className="edit-option">
                                                            <Link to={'#'}><i className="fa fa-pencil"></i></Link>
                                                            <Link to={'#'}><i className="fa fa-trash"></i></Link>
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
                                        <li>
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="media">
                                                        <span className="mr-3"><i className="fa fa-user"></i></span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1">Ayodeji Ilesanmi</h5>
                                                            <p><span>+2347037906418, </span><span>ngdigitalsn@gmail.com</span></p>
                                                            <h6 className="mt-1 mb-1">Super Admin</h6>
                                                        </div>
                                                        <div className="edit-option">
                                                            <Link to={'#'}><i className="fa fa-pencil"></i></Link>
                                                            <Link to={'#'}><i className="fa fa-trash"></i></Link>
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
                                        <li>
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="media">
                                                        <span className="mr-3"><i className="fa fa-user"></i></span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1">Lucky Aigokun</h5>
                                                            <p><span>+2347037906418, </span><span>ngdigitalsn@gmail.com</span></p>
                                                            <h6 className="mt-1 mb-1">Super Admin</h6>
                                                        </div>
                                                        <div className="edit-option">
                                                            <Link to={'#'}><i className="fa fa-pencil"></i></Link>
                                                            <Link to={'#'}><i className="fa fa-trash"></i></Link>
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
                                    </ul>

                                    <div className="mt-5">
                                        <Link to={'./verify-step-5'} className="btn btn-primary px-4 mr-3">Add New Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
        </>
    )
}

export default SettingsAccount;