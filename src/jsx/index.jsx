import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/index';
import BuySell from './pages/buy-sell';
import Accounts from './pages/accounts';

import Airtime from './pages/services/airtime';
import ATM from './pages/services/atm';
import Group from './pages/services/group';
import Buddie from './pages/services/buddie';
import Smooth from './pages/services/smooth';
import Kids from './pages/services/kids';

import Users from './pages/users';
import UserAirtime from './pages/users/airtime';
import UserATM from './pages/users/atm';
import UserGroup from './pages/users/group';
import UserBuddie from './pages/users/buddie';
import UserSmooth from './pages/users/smooth';
import UserKids from './pages/users/kids';

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
import Signin from './pages/signin';
import Signup from './pages/signup';
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

class Index extends Component {
    render() {
        return (
            <>
                <BrowserRouter basename={'/'}>
                    <div id="main-wrapper">
                        <Switch>
                            <Route path='/' exact component={Dashboard} />

                            <Route path='/users/list' component={Users} />
                            <Route path='/users/:id/airtime' component={UserAirtime} />
                            <Route path='/users/:id/atm' component={UserATM} />
                            <Route path='/users/:id/buddie' component={UserBuddie} />
                            <Route path='/users/:id/group' component={UserGroup} />
                            <Route path='/users/:id/smooth' component={UserSmooth} />
                            <Route path='/users/:id/kids' component={UserKids} />

                            <Route path='/services/airtime' component={Airtime} />
                            <Route path='/services/atm' component={ATM} />
                            <Route path='/services/buddie' component={Buddie} />
                            <Route path='/services/group' component={Group} />
                            <Route path='/services/smooth' component={Smooth} />
                            <Route path='/services/kids' component={Kids} />


                            <Route path='/buy-sell' component={BuySell} />
                            <Route path='/accounts' component={Accounts} />
                            <Route path='/settings' component={Settings} />
                            <Route path='/settings-preferences' component={Preferences} />
                            <Route path='/settings-security' component={SettingsSecurity} />
                            <Route path='/settings-account' component={SettingsAccount} />
                            <Route path='/add-bank-acc' component={AddBankAccount} />
                            <Route path='/add-debit-card' component={AddDebitCard} />
                            <Route path='/lock' component={Locked} />
                            <Route path='/otp-1' component={Otp1} />
                            <Route path='/otp-2' component={Otp2} />
                            <Route path='/privacy-policy' component={PrivacyPolicy} />
                            <Route path='/reset' component={Reset} />
                            <Route path='/signin' component={Signin} />
                            <Route path='/signup' component={Signup} />
                            <Route path='/terms-condition' component={TermsCondition} />
                            <Route path='/verify-step-1' component={VerifyStep1} />
                            <Route path='/verify-step-2' component={VerifyStep2} />
                            <Route path='/verify-step-3' component={VerifyStep3} />
                            <Route path='/verify-step-4' component={VerifyStep4} />
                            <Route path='/verify-step-5' component={VerifyStep5} />
                            <Route path='/verify-step-6' component={VerifyStep6} />
                            <Route path='/history' component={History} />
                            <Route path='/demo' component={Demo} />
                            <Route path='/landing' component={Landing} />
                        </Switch>
                    </div>
                </BrowserRouter>

            </>
        );
    }
}

export default Index;