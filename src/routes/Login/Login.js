import React from 'react';
import './login.scss';
import { LoginForm, CompanyName } from '../../components'

const Login = () => {
    return (
        <div className="login">
            <div className="login__welcome">
                <div className="login__company-name">
                    <CompanyName />
                </div>
                <div className="login__welcome">WelCome</div>
            </div>
            <div className="login__form">
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;