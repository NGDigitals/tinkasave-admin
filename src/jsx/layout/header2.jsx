import React, { } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { DropdownButton, } from 'react-bootstrap'
import { setCurrentUser, getCurrentUser } from '../helper/utils';

function Header2({ search }) {
    const currentUser = getCurrentUser();
    const logout = () => {
        setCurrentUser();
        window.location.reload();
    }

    return (
        <>
            <div className="header dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                                {/* <Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.png')} alt="" /></Link> */}
                                <div className="header-search d-flex align-items-center">
                                    <Link className="brand-logo mr-3" to="/">
                                        <img src={require('./../../images/logo.png')} alt="" width="30" />
                                    </Link>
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" 
                                            onKeyUp={(e) => {if(typeof search === 'function') {search(e.target.value)}}} />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2"><i
                                                    className="fa fa-search"></i></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="dashboard_log">
                                    <div className="d-flex align-items-center">
                                        <DropdownButton
                                            alignRight
                                            title={!isEmpty(currentUser) && currentUser.first_name}
                                            className="profile_log"
                                        >
                                            {/* <Link to={'./accounts'} className="dropdown-item">
                                                <i className="la la-user"></i> Account
                                            </Link> */}
                                            {/* <Link to={'./lock'} className="dropdown-item">
                                                <i className="la la-lock"></i> Lock
                                            </Link> */}
                                            <Link to={'#'} className="dropdown-item logout" onClick={() => logout()}>
                                                <i className="la la-sign-out-alt"></i> Logout
                                            </Link>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header2;