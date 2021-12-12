import React, { } from 'react';
import { isEmpty } from 'lodash';
import { getCurrentUser } from '../helper/utils';

function PageTitle() {

    const currentUser = getCurrentUser();
    return (
        <>
            <div className="page_title">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page_title-content">
                                <p>Welcome Back,
                                <span> {!isEmpty(currentUser) && currentUser.first_name}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PageTitle;