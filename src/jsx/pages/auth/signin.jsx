import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Alert, Button, Spinner} from 'react-bootstrap'
import AuthService from '../../services/AuthService';

function Signin() {
    const isRendered = useRef(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState();

    useEffect(() => {
        isRendered.current = true;
        return () => {
            isRendered.current = false;
        };
    }, []);

    const onPress = () => {
        const errors = {};
        setErrors(errors);
        if (isEmpty(email)) errors.email = "Email address is required";
        if (isEmpty(password)) errors.password = "Password is required";
        if (!isEmpty(errors)) {
          setErrors(errors);
        } else {
            if (navigator.onLine) {
                const data = {
                    email,
                    password,
                };
                login(data);
            } else {
                setError("No internet connection");
            }
        }
    };

    const login = async (data) => {
        try {
            setIsSubmitting(true);
            const response = await AuthService.login(data);
            console.log('Res', response)
            if (isRendered.current) {
                setIsSubmitting(false);
                if(response.data.success){
                }else{
                    setError(response.data.message)
                }
            }
        } catch (error) {
            console.log('Error', error)
            if (isRendered.current) {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <>
            <div className="authincation section-paddin">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-5">
                                <Link to={'./'}><img src={require('./../../../images/logo.png')} alt="" /></Link>
                            </div>
                            <div className="auth-form card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Sign in</h4>
                                </div>
                                <div className="card-body">
                                    <form method="post" name="myform" className="signin_validate" action="#">
                                        {!isSubmitting && error && (
                                            <Alert variant={'danger'}>
                                                {error}
                                            </Alert>
                                        )}
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Email Address"
                                                name="email" onKeyUp={(e) => setEmail(e.target.value)} />
                                            {errors && errors.email && <span className="form-error">{errors.email}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password"
                                                name="password" onKeyUp={(e) => setPassword(e.target.value)} />
                                            {errors && errors.password && <span className="form-error">{errors.password}</span>}
                                        </div>
                                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                            {/* <div className="form-group mb-0">
                                                <label className="toggle">
                                                    <input className="toggle-checkbox" type="checkbox" />
                                                    <span className="toggle-switch"></span>
                                                    <span className="toggle-label">Remember me</span>
                                                </label>
                                            </div> */}
                                            <div className="form-group mb-0">
                                                <Link to="/reset">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                        <Button variant="success" disabled={isSubmitting ? true : false} onClick={() => onPress()}>
                                            Sign In
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
                                    {/* <div className="new-account mt-3">
                                        <p>Don't have an account? <Link className="text-primary" to={"./signup"}>Sign
                                            up</Link></p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;