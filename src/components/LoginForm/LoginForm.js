import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';
import { Input, Radio } from '../../components/index';
import './login-form.scss';

const LoginForm = () => {
    const [employeeType, setEmployeeType] = useState('admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    const handleLogin = () => {
        axios({
            method: 'POST',
            url: `http://localhost:3001/api/login${employeeType === 'admin' ? '/admin' : ''}`,
            data: qs.stringify({ email, password }),
            headers:  {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
        .then(res => {
            const { data } = res;
            const { token , employee } = data;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('employeeID', employee._id);
            history.push(employeeType === 'admin' ? '/admin' : '/home', { employee })
        })
        .catch(err => {
            console.log(err);
            alert('Invalid email or password')
        })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const _onChange = (e) => {
        setEmployeeType(e.target.value);
    }

    return (
        <div className="login-form">
            <div className="login-form__title">Login</div>
            <div className="login-form__body">
                <div className="login-form__type">
                    <Radio value="admin" id="admin" label="Admin" onChange={_onChange} checked={employeeType === 'admin'} />
                    <Radio value="employee" id="employee" label="Employee" onChange={_onChange}  checked={employeeType === 'employee'}/>
                </div>
                <Input label="Email" type="text" placeholder={`${employeeType}@gmail.com`} onChange={handleEmailChange} />
                <Input label="Password" type="password" placeholder="*********" onChange={handlePasswordChange}/>
                <button className="login-form__submit" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default LoginForm;