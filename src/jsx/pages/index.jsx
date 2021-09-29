/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import AreaChart from '../charts/area';
import DashboardService from '../services/DashboardService';


function Dashboard() {
    const isRendered = useRef(false);
    const [airtime, setAirtime] = useState({});
    const [atm, setATM] = useState({});
    const [buddie, setBuddie] = useState({});
    const [group, setGroup] = useState({});
    const [smooth, setSmooth] = useState({});
    const [kid, setKid] = useState({});
    const [totalSavings, setTotalSavings] = useState();
    const [totalWithdrawals, setTotalWithdrawals] = useState();
    const [totalInterests, setTotalInterests] = useState();
    const [percentageSavings, setPercentageSavings] = useState();
    const [percentageInterests, setPercentageInterests] = useState();
    const [percentageWithdrawal, setPercentageWithdrawal] = useState();
    const [savingsTransactions, setSavingsTransactions] = useState([]);
    const [withdrawalsTransactions, setWithdrawalsTransactions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        isRendered.current = true;
        /*if (navigator.onLine) {*/fetchData()/*}*/
        return () => {
            isRendered.current = false;
        };
    }, []);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await DashboardService.fetchDashboard();
            if (isRendered.current) {
                const {airtime, atm, buddie, group, smooth, kid, 
                    total_savings, total_withdrawals, total_interests, 
                    percentage_savings, percentage_withdrawal, percentage_interests,
                    savings_transactions, withdrawals_transactions} = response.data.result;
                    setAirtime(airtime);
                    setATM(atm);
                    setBuddie(buddie);
                    setGroup(group);
                    setSmooth(smooth);
                    setKid(kid);
                    setTotalSavings(total_savings);
                    setTotalWithdrawals(total_withdrawals);
                    setTotalInterests(total_interests);
                    setPercentageSavings(percentage_savings);
                    setPercentageWithdrawal(percentage_withdrawal);
                    setPercentageInterests(percentage_interests);
                    setSavingsTransactions(savings_transactions);
                    setWithdrawalsTransactions(withdrawals_transactions);
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
                        <div className="col-xl-9 col-xxl-12">
                            <div className="row">
                                <div className="col-xl-4 col-lg-12 col-xxl-4">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="widget-card dashboard-widget-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="widget-stat">
                                                        <div className="coin-title">
                                                            <h5 className="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/airtime">Airtime/Data Savings
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>{airtime.interests}<span className="badge badge-success ml-2">+
    {airtime.percentage_interests}%</span>
                                                        </h4>
                                                    </div>
                                                    <div className="text-right">
                                                        <h5 className="text-success">{airtime.savings}</h5>
                                                        <span className="text-danger">{airtime.withdrawals}</span>
                                                    </div>
                                                    {/* <BtcChart/> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="widget-card dashboard-widget-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="widget-stat">
                                                        <div className="coin-title">
                                                            <h5 className="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/atm">Tinka Spend
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>{atm.interests} <span className="badge badge-success ml-2">+
    {atm.percentage_interests}%</span>
                                                        </h4>
                                                    </div>
                                                    <div className="text-right">
                                                        <h5 className="text-success">{atm.savings}</h5>
                                                        <span className="text-danger">{atm.withdrawals}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="widget-card dashboard-widget-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="widget-stat">
                                                        <div className="coin-title">
                                                            <h5 className="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/buddie">Tinka Buddie
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>{buddie.interests} <span className="badge badge-success ml-2">+
    {buddie.percentage_interests}%</span>
                                                        </h4>
                                                    </div>
                                                    <div className="text-right">
                                                        <h5 className="text-success">{buddie.savings}</h5>
                                                        <span className="text-danger">{buddie.withdrawals}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="widget-card dashboard-widget-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="widget-stat">
                                                        <div className="coin-title">
                                                            <h5 className="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/group">Tinka GSave
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>{group.interests} <span className="badge badge-success ml-2">+
    {group.percentage_interests}%</span>
                                                        </h4>
                                                    </div>
                                                    <div className="text-right">
    <h5 className="text-success">{group.savings}</h5>
                                                        <span className="text-danger">{group.withdrawals}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="widget-card dashboard-widget-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="widget-stat">
                                                        <div className="coin-title">
                                                            <h5 className="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/smooth">Tinka Smooth
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>{smooth.interests} <span className="badge badge-success ml-2">+
    {smooth.percentage_interests}%</span>
                                                        </h4>
                                                    </div>
                                                    <div className="text-right">
    <h5 className="text-success">{smooth.savings}</h5>
    <span className="text-danger">{smooth.withdrawals}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="widget-card dashboard-widget-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="widget-stat">
                                                        <div className="coin-title">
                                                            <h5 className="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/kids">Tinka Kids
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>{kid.interests} <span className="badge badge-success ml-2">+
    {kid.percentage_interests}%</span>
                                                        </h4>
                                                    </div>
                                                    <div className="text-right">
    <h5 className="text-success">{kid.savings}</h5>
    <span className="text-danger">{kid.withdrawals}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-12 col-xxl-8">
                                    <div className="card profile_chart transparent">
                                        <div className="card-header">
                                            <div className="chart_current_data">
                                                <h3>{totalSavings}</h3>
            <p className="text-success">{totalInterests} <span> ({percentageInterests}%)</span></p>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <AreaChart type="area" savings={savingsTransactions} withdrawals={withdrawalsTransactions} />
                                            <div className="chart-content text-center mt-3">
                                                <div className="row">
                                                    <div className="col-xl-4 col-sm-6 col-6">
                                                        <div className="chart-stat">
                                                            <p className="mb-1">Total Savings</p>
    <strong>{totalSavings}</strong>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-sm-6 col-6">
                                                        <div className="chart-stat">
                                                            <p className="mb-1">Total Interests</p>
    <strong>{totalInterests}</strong>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-sm-6 col-6">
                                                        <div className="chart-stat">
                                                            <p className="mb-1">Total Withdrawal</p>
    <strong>{totalWithdrawals}</strong>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-sm-6 col-6">
                                                        <div className="chart-stat">
                                                            <p className="mb-1">Lowest Hold</p>
                                                            <strong>32 Days</strong>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-sm-6 col-6">
                                                        <div className="chart-stat">
                                                            <p className="mb-1">Highest Hold</p>
                                                            <strong>88 Days</strong>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-sm-6 col-6">
                                                        <div className="chart-stat">
                                                            <p className="mb-1">Transactions </p>
    <strong>{percentageSavings}% / {percentageWithdrawal}% </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-xxl-12">
                                <AreaChart type="area" savings={savingsTransactions} withdrawals={withdrawalsTransactions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default Dashboard;