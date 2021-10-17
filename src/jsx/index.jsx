import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

import Auth from './pages/auth';
import AuthOTP from './pages/auth/otp';

import Dashboard from './pages/app/index';
// import BuySell from './pages/buy-sell';
// import Accounts from './pages/accounts';

import Airtime from './pages/app/services/airtime';
import ATM from './pages/app/services/atm';
import Group from './pages/app/services/group';
import Buddie from './pages/app/services/buddie';
import Smooth from './pages/app/services/smooth';
import Kids from './pages/app/services/kids';

import Users from './pages/app/users';
import UserAirtime from './pages/app/users/airtime';
import UserATM from './pages/app/users/atm';
import UserGroup from './pages/app/users/group';
import UserBuddie from './pages/app/users/buddie';
import UserSmooth from './pages/app/users/smooth';
import UserKids from './pages/app/users/kids';
import UserReferral from './pages/app/users/referral';

import Settings from './pages/settings';
import Preferences from './pages/settings-preferences';
import SettingsSecurity from './pages/settings-security';
import SettingsAccount from './pages/settings-account';
import AddBankAccount from './pages/add-bank-acc';
import AddDebitCard from './pages/add-debit-card';
import Locked from './pages/lock';
import Otp1 from './pages/otp-1';
import Otp2 from './pages/otp-2';
import PrivacyPolicy from './pages/privacy-policy';
import Reset from './pages/reset';

import TermsCondition from './pages/terms-condition';
import VerifyStep1 from './pages/verify-step-1';
import VerifyStep2 from './pages/verify-step-2';
import VerifyStep3 from './pages/verify-step-3';
import VerifyStep4 from './pages/verify-step-4';
import VerifyStep5 from './pages/verify-step-5';
import VerifyStep6 from './pages/verify-step-6';
import History from './pages/history';
import Demo from './pages/demo';
import Landing from './pages/landing';
import { getCurrentUser } from './helper/utils';

class Index extends Component {
    render() {
        const currentUser = getCurrentUser();
        // if(!isEmpty(currentUser)){
        //     return (
        //         <>
        //             <BrowserRouter basename={'/'}>
        //                 <div id="main-wrapper">
        //                     <Switch>
        //                         <Route path='/' exact component={Dashboard} />
        //                         <Route path='/users/list' component={Users} />
        //                         <Route path='/users/:id/airtime' component={UserAirtime} />
        //                         <Route path='/users/:id/atm' component={UserATM} />
        //                         <Route path='/users/:id/buddie' component={UserBuddie} />
        //                         <Route path='/users/:id/group' component={UserGroup} />
        //                         <Route path='/users/:id/smooth' component={UserSmooth} />
        //                         <Route path='/users/:id/kids' component={UserKids} />
        //                         <Route path='/users/:id/referral' component={UserReferral} />

        //                         <Route path='/services/airtime' component={Airtime} />
        //                         <Route path='/services/atm' component={ATM} />
        //                         <Route path='/services/buddie' component={Buddie} />
        //                         <Route path='/services/group' component={Group} />
        //                         <Route path='/services/smooth' component={Smooth} />
        //                         <Route path='/services/kids' component={Kids} />

        //                         <Route path='/buy-sell' component={BuySell} />
        //                         <Route path='/accounts' component={Accounts} />
        //                         <Route path='/settings' component={Settings} />
        //                         <Route path='/settings-preferences' component={Preferences} />
        //                         <Route path='/settings-security' component={SettingsSecurity} />
        //                         <Route path='/settings-account' component={SettingsAccount} />
        //                         <Route path='/add-bank-acc' component={AddBankAccount} />
        //                         <Route path='/add-debit-card' component={AddDebitCard} />
        //                         <Route path='/lock' component={Locked} />
        //                         <Route path='/otp-1' component={Otp1} />
        //                         <Route path='/otp-2' component={Otp2} />
        //                         <Route path='/privacy-policy' component={PrivacyPolicy} />
        //                         <Route path='/reset' component={Reset} />
                                
        //                         <Route path='/terms-condition' component={TermsCondition} />
        //                         <Route path='/verify-step-1' component={VerifyStep1} />
        //                         <Route path='/verify-step-2' component={VerifyStep2} />
        //                         <Route path='/verify-step-3' component={VerifyStep3} />
        //                         <Route path='/verify-step-4' component={VerifyStep4} />
        //                         <Route path='/verify-step-5' component={VerifyStep5} />
        //                         <Route path='/verify-step-6' component={VerifyStep6} />
        //                         <Route path='/history' component={History} />
        //                         <Route path='/demo' component={Demo} />
        //                         <Route path='/landing' component={Landing} />
        //                     </Switch>
        //                 </div>
        //             </BrowserRouter>

        //         </>
        //     );
        // }else{
            return (
                <>
                    <BrowserRouter basename={'/'}>
                        <div id="main-wrapper">
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => {
                                        return (
                                        !isEmpty(currentUser) ?
                                        <Redirect to="/app" /> :
                                        <Redirect to="/auth" /> 
                                        )
                                    }}
                                />
                                {!isEmpty(currentUser) &&
                                <Route
                                    exact
                                    path={["/auth", "/auth/*"]}
                                    render={() => {
                                        return <Redirect to="/app" />
                                    }}
                                />}
                                <Route path='/auth' exact component={Auth} />
                                <Route path='/auth/otp' exact component={AuthOTP} />

                                {isEmpty(currentUser) &&
                                <Route
                                    exact
                                    path={["/app", "/app/*"]}
                                    render={() => {
                                        return <Redirect to="/auth" />
                                    }}
                                />}
                                <Route path='/app' exact component={Dashboard} />
                                <Route path='/app/users/list' component={Users} />
                                <Route path='/app/users/:id/airtime' component={UserAirtime} />
                                <Route path='/app/users/:id/atm' component={UserATM} />
                                <Route path='/app/users/:id/buddie' component={UserBuddie} />
                                <Route path='/app/users/:id/group' component={UserGroup} />
                                <Route path='/app/users/:id/smooth' component={UserSmooth} />
                                <Route path='/app/users/:id/kids' component={UserKids} />
                                <Route path='/app/users/:id/referral' component={UserReferral} />
                                <Route path='/app/services/airtime' component={Airtime} />
                                <Route path='/app/services/atm' component={ATM} />
                                <Route path='/app/services/buddie' component={Buddie} />
                                <Route path='/app/services/group' component={Group} />
                                <Route path='/app/services/smooth' component={Smooth} />
                                <Route path='/app/services/kids' component={Kids} />

                            </Switch>
                        </div>
                    </BrowserRouter>

                </>
            );
        // }
    }
}

export default Index;