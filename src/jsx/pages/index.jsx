/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { } from 'react';
import { Link } from 'react-router-dom';

import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';

import AreaChart from '../charts/area';


function Dashboard() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div class="content-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-9 col-xxl-12">
                            <div class="row">
                                <div class="col-xl-4 col-lg-12 col-xxl-4">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12">
                                            <div class="widget-card dashboard-widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <h5 class="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/airtime">Airtime Savings
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>N1254.36 <span class="badge badge-success ml-2">+
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <div class="text-right">
                                                        <h5 class="text-success">N1,650,000</h5>
                                                        <span class="text-danger">N1,125</span>
                                                    </div>
                                                    {/* <BtcChart/> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12">
                                            <div class="widget-card dashboard-widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <h5 class="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/atm">ATM Savings
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>N1254.36 <span class="badge badge-danger ml-2">-
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <div class="text-right">
                                                        <h5 class="text-success">N1,650,000</h5>
                                                        <span class="text-danger">N1,125</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12">
                                            <div class="widget-card dashboard-widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <h5 class="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/buddie">Tinka Buddie
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>N1254.36 <span class="badge badge-danger ml-2">-
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <div class="text-right">
                                                        <h5 class="text-success">N1,650,000</h5>
                                                        <span class="text-danger">N1,125</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12">
                                            <div class="widget-card dashboard-widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <h5 class="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/gsave">Tinka GSave
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>N1254.36 <span class="badge badge-success ml-2">+
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <div class="text-right">
                                                        <h5 class="text-success">N1,650,000</h5>
                                                        <span class="text-danger">N1,125</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12">
                                            <div class="widget-card dashboard-widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <h5 class="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/smooth">Tinka Smooth
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>N1254.36 <span class="badge badge-success ml-2">+
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <div class="text-right">
                                                        <h5 class="text-success">N1,650,000</h5>
                                                        <span class="text-danger">N1,125</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12">
                                            <div class="widget-card dashboard-widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <h5 class="d-inline-block ml-0 mb-2">
                                                            <strong><Link to="/services/kids">Tinka Kids
                                                                {/*<span>{' '}(24h)</span>*/}</Link></strong>
                                                            </h5>
                                                        </div>
                                                        <h4>N1254.36 <span class="badge badge-success ml-2">+
                                                            06%</span>
                                                        </h4>
                                                    </div>
                                                    <div class="text-right">
                                                        <h5 class="text-success">N1,650,000</h5>
                                                        <span class="text-danger">N1,125</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-12 col-xxl-8">
                                    <div class="card profile_chart transparent">
                                        <div class="card-header">
                                            <div class="chart_current_data">
                                                <h3>25,485,600 <span>NGN</span></h3>
                                                <p class="text-success">1,250,648 <span>NGN (20%)</span></p>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <AreaChart />
                                            <div class="chart-content text-center mt-3">
                                                <div class="row">
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Total Savings</p>
                                                            <strong>N12,365,485</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Total Interests</p>
                                                            <strong>N2,900,564</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Total Withdrawal</p>
                                                            <strong>N1,342,900</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Lowest Hold</p>
                                                            <strong>32 Days</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Highest Hold</p>
                                                            <strong>88 Days</strong>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6 col-6">
                                                        <div class="chart-stat">
                                                            <p class="mb-1">Transactions </p>
                                                            <strong>73% / 27% </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Dashboard;