/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import NumberFormat from 'react-number-format';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import config from '../../../helper/config';
import DashboardService from '../../../services/DashboardService';

const LIMIT = 25;
const SERVICE_NAME = 'group';

function Group() {

    const isRendered = useRef(false);
    const [transactions, setTransactions] = useState([]);
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
            const response = await DashboardService.fetchTransactions(SERVICE_NAME, page, LIMIT);
            if (isRendered.current) {
                const {
                    content, is_last, current_page,
                  } = response.data.result;
                setIsLast(is_last);
                setTransactions(page === 0 ? [...content] : [...transactions, ...content]);
                setCurrentPage(current_page + 1);
                setIsLoading(false);
                setIsLoaded(true);
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
            {(!isLoading && isLoaded) && (
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="card-title">Tinka GSave</h4>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="transaction-table">
                                        <div className="table-responsive">
                                            <table className="table mb-0 table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>
                                                            Description
                                                        </th>
                                                        <th>
                                                            Reference
                                                        </th>
                                                        <th>Amount</th>
                                                        <th>Date & Time</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {transactions.map((t) => (
                                                        <tr key={t.id}>
                                                            <td><span className={`${t.amount > 0 ? 'buy-thumb' : 'sold-thumb'}`}><i className={`${t.amount > 0 ? 'la la-arrow-up' : 'la la-arrow-down'}`}></i></span>
                                                            </td>
                                                            <td>{t.remark}</td>
                                                            <td>{t.reference}</td>
                                                            <td className={`${t.amount > 0 ? 'text-success' : 'text-danger'}`}>
                                                            <NumberFormat
                                                                value={t.amount}
                                                                className="foo"
                                                                displayType={'text'}
                                                                thousandSeparator={true}
                                                                prefix={config.currency}
                                                                fixedDecimalScale={true}
                                                                decimalScale={2}
                                                                renderText={(value, props) => <div {...props}>{value}</div>}
                                                                />
                                                            </td>
                                                            <td>{t.created_at}</td>
                                                            <td className={`${t.status.toLowerCase() === 'completed' ? 'text-success' : 'text-warning'}`}>
                                                                {t.status}
                                                            </td>
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
            </div>)}
        </>
    )
}

export default Group;