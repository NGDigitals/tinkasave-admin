/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import NumberFormat from 'react-number-format';
import {isEmpty, debounce} from 'lodash';
import Loader from "react-loader-spinner";
import Pager from '../../../element/pager';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import config from '../../../helper/config';
import DashboardService from '../../../services/DashboardService';

const LIMIT = 25;
const SERVICE_NAME = 'smooth';

function Smooth() {

    const isRendered = useRef(false);
    const [transactions, setTransactions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyword] = useState();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [sessionExpired, setSessionExpired] = useState(false);
    
    useEffect(() => {
        isRendered.current = true;
        if (navigator.onLine) {fetchData(0)}
        return () => {
            isRendered.current = false;
        };
    }, []);

    useEffect(() => {
        isRendered.current = true;
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
                response = await DashboardService.searchTransactions(keyword, page, LIMIT);
            else
                response = await DashboardService.fetchTransactions(SERVICE_NAME, page, LIMIT);
            if (isRendered.current) {
                const {
                    content, total,
                  } = response.data.result;
                setCurrentPage(page);
                setTotalItems(total)
                setTransactions(content);
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
            {(!isLoading && isLoaded && !isEmpty(transactions)) ? (
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="card-title">Tinka Smooth</h4>
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
                                                            <td className={`${t.status.toLowerCase() === 'completed' ? 'text-success' : 
                                                                (t.status.toLowerCase() === 'failed' ? 'text-danger' : 'text-warning')}`}>
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
                <div>
                    {transactions &&
                        <Pager
                            getAllData={fetchData} 
                            totalRecords={totalItems}
                            activePage={currentPage}
                            itemsCountPerPage = {LIMIT} />
                    }
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