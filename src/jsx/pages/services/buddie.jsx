import React, { } from 'react';
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
                                    <h4 className="card-title">Tinka Buddie</h4>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="transaction-table">
                                        <div className="table-responsive">
                                            <table className="table mb-0 table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>
                                                            Channel
                                                        </th>
                                                        <th>
                                                            Reference
                                                        </th>
                                                        <th>Amount</th>
                                                        <th>Date & Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td>
                                                        <td>Using - Bank *******5264</td>
                                                        <td>153637383399393</td>
                                                        <td className="text-success">-2,420 NGN</td>
                                                        <td>12th June 2021 13:32 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td>
                                                        <td>Using - Bank *******5264</td>
                                                        <td>153637383399393</td>
                                                        <td className="text-success">-2,420 NGN</td>
                                                        <td>12th June 2021 13:32 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>
                                                        <td>Using - Bank *******5264</td>
                                                        <td>153637383399393</td>
                                                        <td className="text-danger">-2,420 NGN</td>
                                                        <td>12th June 2021 13:32 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>
                                                        <td>Using - Bank *******5264</td>
                                                        <td>153637383399393</td>
                                                        <td className="text-danger">-2,420 NGN</td>
                                                        <td>12th June 2021 13:32 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td>
                                                        <td>Using - Bank *******5264</td>
                                                        <td>153637383399393</td>
                                                        <td className="text-success">-2,420 NGN</td>
                                                        <td>12th June 2021 13:32 PM</td>
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