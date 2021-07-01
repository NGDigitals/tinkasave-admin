import React, { } from 'react';
import { Link } from 'react-router-dom';

import Header2 from '../../layout/header2';
import Sidebar from '../../layout/sidebar';
import PageTitle from '../../element/page-title';



function Airtime() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="card-title">Airtime Savings</h4>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="transaction-table">
                                        <div className="table-responsive">
                                            <table className="table mb-0 table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        {/* <th></th> */}
                                                        <th>
                                                            Owner
                                                        </th>
                                                        <th>
                                                            Source
                                                        </th>
                                                        <th>
                                                            Channel
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
                                                    <tr>
                                                        {/* <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td> */}
                                                        <td><Link to="/">Deji Ilesanmi</Link></td>
                                                        <td>+2348137504812</td>
                                                        <td>Using - Bank *******5264</td>
                                                        <td>153637383399393</td>
                                                        <td className="text-success">+100 NGN</td>
                                                        <td>12th June 2021 13:32 PM</td>
                                                        <td><span class="badge badge-warning ml-2">Pending</span></td>
                                                    </tr>
                                                    <tr>
                                                        {/* <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td> */}
                                                        <td><Link to="/">Deji Ilesanmi</Link></td>
                                                        <td>+2348137504812</td>
                                                        <td>Using - Bank *******5264</td>
                                                        <td>153637383399393</td>
                                                        <td className="text-success">+100 NGN</td>
                                                        <td>12th June 2021 13:32 PM</td>
                                                        <td><span class="badge badge-success ml-2">Success</span></td>
                                                    </tr>
                                                    <tr>
                                                        {/* <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td> */}
                                                        <td><Link to="/">Deji Ilesanmi</Link></td>
                                                        <td>N/A</td>
                                                        <td>Using - Bank *******5264</td>
                                                        <td>153637383399393</td>
                                                        <td className="text-danger">-2,420 NGN</td>
                                                        <td>12th June 2021 13:32 PM</td>
                                                        <td><span class="badge badge-danger ml-2">Failed</span></td>
                                                    </tr>
                                                    <tr>
                                                        {/* <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td> */}
                                                        <td><Link to="/">Deji Ilesanmi</Link></td>
                                                        <td>N/A</td>
                                                        <td>Using - Bank *******5264</td>
                                                        <td>153637383399393</td>
                                                        <td className="text-danger">-1000 NGN</td>
                                                        <td>12th June 2021 13:32 PM</td>
                                                        <td><span class="badge badge-warning ml-2">Pending</span></td>
                                                    </tr>
                                                    <tr>
                                                        {/* <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td> */}
                                                        <td><Link to="/">Deji Ilesanmi</Link></td>
                                                        <td>+2348137504812</td>
                                                        <td>Using - Bank *******5264</td>
                                                        <td>153637383399393</td>
                                                        <td className="text-success">+50 NGN</td>
                                                        <td>12th June 2021 13:32 PM</td>
                                                        <td><span class="badge badge-success ml-2">Success</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Airtime;