/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useParams } from "react-router-dom";
import isEmpty from 'lodash/isEmpty';
import Loader from "react-loader-spinner";
import Pager from '../../../element/pager';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import config from '../../../helper/config';
import UserService from '../../../services/UserService';

const LIMIT = 20;
const SERVICE_NAME = 'smooth';

function Smooth() {

    const { id } = useParams();
    const isRendered = useRef(false);
    const [user, setUser] = useState({});
    const [services, setServices] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
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
            const response = await UserService.fetchServices(SERVICE_NAME, id);
            if (isRendered.current) {
                const { user, content, total } = response.data.result
                setUser(user)
                setServices(content);
                setIsLoading(false);
                setIsLoaded(true);
                setCurrentPage(page);
                setTotalItems(total)
            }
        } catch (error) {
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
            {(!isLoading && isLoaded && !isEmpty(services)) ? (
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="card-title">{user.first_name + ' ' + user.last_name} - Tinka Smooth</h4>
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
                                                        <th>Total Interests</th>
                                                        <th>Total Withdrawals</th>
                                                        <th>Balance</th>
                                                        <th>Maturity Date</th>
                                                        <th>Mode</th>
                                                        <th>Status</th>
                                                        {/* <th>Date & Time</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {services.map((s) => (
                                                        <tr key={s.id}>
                                                            <td>{s.name}</td>
                                                            <td>
                                                                <NumberFormat
                                                                    value={s.amount}
                                                                    className="foo"
                                                                    displayType={'text'}
                                                                    thousandSeparator={true}
                                                                    prefix={config.currency}
                                                                    fixedDecimalScale={true}
                                                                    decimalScale={2}
                                                                    renderText={(value, props) => <div {...props}>{value}</div>}
                                                                    />
                                                            </td>
                                                            <td className="text-success">
                                                            <NumberFormat
                                                                value={s.total_savings}
                                                                className="foo"
                                                                displayType={'text'}
                                                                thousandSeparator={true}
                                                                prefix={config.currency}
                                                                fixedDecimalScale={true}
                                                                decimalScale={2}
                                                                renderText={(value, props) => <div {...props}>{value}</div>}
                                                                />
                                                            </td>
                                                            <td className="text-success">
                                                            <NumberFormat
                                                                value={s.total_interest}
                                                                className="foo"
                                                                displayType={'text'}
                                                                thousandSeparator={true}
                                                                prefix={config.currency}
                                                                fixedDecimalScale={true}
                                                                decimalScale={2}
                                                                renderText={(value, props) => <div {...props}>{value}</div>}
                                                                />
                                                            </td>
                                                            <td className="text-danger">
                                                            <NumberFormat
                                                                value={s.total_withdrawal}
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
                                                                value={s.balance}
                                                                className="foo"
                                                                displayType={'text'}
                                                                thousandSeparator={true}
                                                                prefix={config.currency}
                                                                fixedDecimalScale={true}
                                                                decimalScale={2}
                                                                renderText={(value, props) => <div {...props}>{value}</div>}
                                                                />
                                                            </td>
                                                            <td>{s.maturity_date}</td>
                                                            <td>{s.mode}</td>
                                                            <td>{s.status}</td>
                                                            {/* <td>{s.created_at}</td> */}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
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

export default Smooth;