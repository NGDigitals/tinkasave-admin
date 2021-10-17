/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Alert, Button, Spinner} from 'react-bootstrap'
import messages from '../../helper/messages';
import AuthService from '../../services/AuthService';
import { setCurrentUser } from '../../helper/utils';

function OTP() {
    const isRendered = useRef(false);
    const [code, setCode] = useState();
    const [user, setUser] = useState();
    const [message, setMessage] = useState();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [errors, setErrors] = useState({});
    const location = useLocation();
    const history = useHistory();
    const [isSubmitting, setIsSubmitting] = useState();

    useEffect(() => {
        if(!isEmpty(location) && !isEmpty(location.state) && !isEmpty(location.state.user)){
            setUser(location.state.user)
            setMessage(location.state.message)
            isRendered.current = true;
            return () => {
                isRendered.current = false;
            };
        }else
            history.push('/auth');
    }, []);

    const onVerify = () => {
        const errors = {};
        setError();
        setErrors(errors);
        if (isEmpty(code)) errors.code = messages.codeRequired;
        if (!isEmpty(errors)) {
          setErrors(errors);
        } else {
            if (navigator.onLine) {
                const data = {
                    code,
                };
                verify(data);
            } else
                setError("No internet connection");
        }
    };

    const onResend = () => {
        if (navigator.onLine) {
            resend();
        } else
            setError("No internet connection");
    };


    const verify = async (data) => {
        try {
            setIsSubmitting(true);
            const response = await AuthService.verifyOTP(user.authorization, user.email, data);
            if (isRendered.current) {
                setIsSubmitting(false);
                if(response.data.success){
                    setSuccess(response.data.message);
                    setCurrentUser(user);
                    window.location.reload();
                }else
                    setError(response.data.message)
            }
        } catch (error) {
            setError(messages.unknownError)
            if (isRendered.current) {
                setIsSubmitting(false);
            }
        }
    };

    const resend = async () => {
        try {
            setIsSubmitting(true);
            const response = await AuthService.resendOTP(user.authorization, user.email);
            if (isRendered.current) {
                setIsSubmitting(false);
                if(response.data.success){
                    setSuccess(response.data.message);
                }else{
                    setError(response.data.message)
                }
            }
        } catch (error) {
            setError(messages.unknownError)
            if (isRendered.current) {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-5">
                                <Link to={'./'}><img src={require('./../../../images/logo.png')} alt="" /></Link>
                            </div>
                            <div className="auth-form card">
                                <div className="card-body">
                                    <Link className="page-back text-muted" to={'../auth'}><span><i
                                        className="fa fa-angle-left"></i></span> Back</Link>
                                    <h3 className="text-center">OTP Verification</h3>
                                    {!isSubmitting && error && (
                                        <Alert variant={'danger'}>
                                            {error}
                                        </Alert>
                                    )}
                                    {!isSubmitting && success && (
                                        <Alert variant={'success'}>
                                            {success}
                                        </Alert>
                                    )}
                                    <p className="text-center mb-5">{message}</p>
                                    <form action="#">
                                        <div className="form-group">
                                            <label>Your OTP Code</label>
                                            <input type="text" className="form-control text-center font-weight-bold"
                                                onKeyUp={(e) => setCode(e.target.value)} />
                                            {errors && errors.code && <span className="form-error">{errors.code}</span>}
                                        </div>
                                        <div className="text-center">
                                            <Button variant="success" disabled={isSubmitting ? true : false} onClick={() => onVerify()}>
                                                Verify
                                                {isSubmitting && <Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                />}
                                            </Button>
                                            {/* <Link to={'#'} type="submit" className="btn btn-success btn-block">Sign in</Link> */}
                                        </div>
                                    </form>
                                    <div className="new-account mt-3 d-flex justify-content-between">
                                        {!isSubmitting && <p>Don't get code? <Link className="text-primary" to={'#'} onClick={() => onResend()}>Resend</Link></p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>  )
}

export default OTP;