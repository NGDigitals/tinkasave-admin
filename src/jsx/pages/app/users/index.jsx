/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {isEmpty, debounce} from 'lodash';
import ReactRoundedImage from "react-rounded-image";
import Loader from "react-loader-spinner";
import Pager from '../../../element/pager';
import config from '../../../helper/config';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import UserService from '../../../services/UserService';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LIMIT = 10;

function Users() {
    const appPath = config.appPath;
    
    const isRendered = useRef(false);
    const [users, setUsers] = useState([]);
    const [keyword, setKeyword] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [sessionExpired, setSessionExpired] = useState(false);

    useEffect(() => {
        isRendered.current = true;
        // if (!isEmpty(keyword)) {fetchData(0)}
        if (navigator.onLine) {fetchData(0)}
        return () => {
            // setKeyword();
            isRendered.current = false;
        };
    }, [keyword]);

    const fetchData = async (page) => {
        try {
            setIsLoading(true);
            let response;
            if (!isEmpty(keyword))
                response = await UserService.search(keyword, page, LIMIT);
            else
                response = await UserService.fetch(page, LIMIT);
            if (isRendered.current) {
                const {
                    total, content,
                  } = response.data.result;
                setUsers(content);
                setCurrentPage(page);
                setTotalItems(total)
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

    const search = debounce((keyword) => {
        setKeyword(keyword)
    }, 1000, false)

    return (
        <>
            <Header2 search={search} expired={sessionExpired} />
            <Sidebar />
            <PageTitle />
            {(!isLoading && isLoaded) ? (
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Active Users ({`${totalItems}`})</h4>
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
                                                                {/* <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={`${appPath}/users/${u.id}/referral`}>Total Savings ({u.total_savings})</Link></span>
                                                                </div> */}
                                                                {/* <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={`${appPath}/users/${u.id}/referral`}>Referrals ({u.count.referral})</Link></span>
                                                                </div> */}
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={`${appPath}/users/${u.id}/airtime`}>Airtime/Data Savings ({u.count.airtime})</Link></span>
                                                                </div>
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={`${appPath}/users/${u.id}/atm`}>Tinka Spend ({u.count.atm})</Link></span>
                                                                </div>
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={`${appPath}/users/${u.id}/buddie`}>Tinka Buddie ({u.count.buddie})</Link></span>
                                                                </div>
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={`${appPath}/users/${u.id}/group`}>Tinka GSave ({u.count.group})</Link></span>
                                                                </div>
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={`${appPath}/users/${u.id}/smooth`}>Tinka Smooth ({u.count.smooth})</Link></span>
                                                                </div>
                                                                <div className="verified mt-1 mb-1">
                                                                    <span><i className="la la-check"></i><Link to={`${appPath}/users/${u.id}/kids`}>Tinka Kids ({u.count.kid})</Link></span>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {users &&
                        <Pager
                            getAllData={fetchData} 
                            totalRecords={totalItems}
                            activePage={currentPage}
                            itemsCountPerPage = {LIMIT} />
                    }
                </div>
            </div>) : 
            <div style={{
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
            /></div>
            }
        </>
    )
}

export default Users;