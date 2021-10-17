import React, { } from 'react';
import { Link } from 'react-router-dom';
import config from '../helper/config';
import { setCurrentUser } from '../helper/utils';
function Sidebar() {

    const appPath = config.appPath;

    const logout = () => {
        setCurrentUser();
        window.location.reload();
    }

    return (
        <>
            <div className="sidebar">
                <Link className="brand-logo" to={"/app"}>
                    <img src={require('../../images/logo.png')} alt="" />
                </Link>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={appPath} data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i className="icofont-ui-home"></i></span>
                            </Link>
                        </li>
                        <li><Link to={`${appPath}/users/list`} data-toggle="tooltip" data-placement="right" title="Users">
                            <span><i className="icofont-users"></i></span>
                        </Link>
                        </li>
                        <li><Link to={'#'} data-toggle="tooltip" data-placement="right" title="Accounts">
                            <span><i className="icofont-architecture-alt"></i></span>
                        </Link>
                        </li>
                        <li><Link to={'#'} data-toggle="tooltip" data-placement="right" title="Settings">
                            <span><i className="icofont-ui-settings"></i></span>
                        </Link>
                        </li>
                        <li className="logout"><Link to={'#'} data-toggle="tooltip" data-placement="right"
                            title="Signout" onClick={() => logout()}>
                            <span><i className="icofont-power"></i></span>
                        </Link>
                        </li>
                    </ul>
                    <div className="copyright">
                        © TinkaSave
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;