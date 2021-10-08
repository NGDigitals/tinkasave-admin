/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useParams } from "react-router-dom";
import { Line } from 'rc-progress';
import Header2 from '../../layout/header2';
import Sidebar from '../../layout/sidebar';
import PageTitle from '../../element/page-title';
import config from '../../helper/config';
import UserService from '../../services/UserService';

const LIMIT = 25;

function Referral() {

    const { id } = useParams();
    const isRendered = useRef(false);
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLast, setIsLast] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        isRendered.current = true;
        /*if (navigator.onLine) {*/fetchData(0)/*}*/
        return () => {
            isRendered.current = false;
        };
    }, []);

    const fetchData = async (page) => {
        try {
            setIsLoading(true);
            const response = await UserService.fetchReferral(id, page, LIMIT);
            console.log('Res', response)
            if (isRendered.current) {
                if(response.data.success){
                    const { user, content,
                        is_last, current_page } = response.data.result
                    setIsLast(is_last);
                    setCurrentPage(current_page + 1);
                    setUser(user)
                    setUsers(content);
                    setIsLoading(false);
                    setIsLoaded(true);
                }
            }
        } catch (error) {
            console.log('Error', error)
          if (isRendered.current) {
            setIsLoading(false);
            // if (error.response && error.response.status === 401)
            //   setUnauthorizedAction(true);
          }
        }
    };

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />
            {(!isLoading && isLoaded) && (
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="card-title">{user.first_name + ' ' + user.last_name} - Referral</h4>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="transaction-table">
                                        <div className="table-responsive">
                                        <table className="table mb-0 table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Amount</th>
                                                        <th>Total Savings</th>
                                                        <th>% Complete</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map((u) => {
                                                        const percentage = (u.total_savings / (u.amount * 100)) * 100;
                                                        console.log('Amount: ', percentage)
                                                        return (
                                                        <tr key={u.id}>
                                                            <td>{u.referred}</td>
                                                            <td>
                                                                <NumberFormat
                                                                    value={u.amount}
                                                                    className="foo"
                                                                    displayType={'text'}
                                                                    thousandSeparator={true}
                                                                    prefix={config.currency}
                                                                    fixedDecimalScale={true}
                                                                    decimalScale={2}
                                                                    renderText={(value, props) => <div {...props}>{value}</div>}
                                                                    />
                                                            </td>
                                                            <td>
                                                                <NumberFormat
                                                                    value={u.total_savings}
                                                                    className="foo"
                                                                    displayType={'text'}
                                                                    thousandSeparator={true}
                                                                    prefix={config.currency}
                                                                    fixedDecimalScale={true}
                                                                    decimalScale={2}
                                                                    renderText={(value, props) => <div {...props}>{value}</div>}
                                                                    />
                                                            </td>
                                                            <td>
                                                                <Line percent={percentage} strokeWidth="5" strokeColor={`${percentage >= 100 ? '#5cb85c' : '#f0ad4e'}`} />
                                                            </td>
                                                            <td className={`${percentage >= 100 ? 'text-success' : 'text-warning'}`}>
                                                            <NumberFormat
                                                                value={percentage}
                                                                className="foo"
                                                                displayType={'text'}
                                                                thousandSeparator={true}
                                                                // prefix={config.currency}
                                                                fixedDecimalScale={true}
                                                                decimalScale={2}
                                                                renderText={(value, props) => <div {...props}>{value + '%'}</div>}
                                                                />
                                                            </td>
                                                        </tr>
                                                    )})}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default Referral;