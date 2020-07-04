import React from 'react';
import { useHistory } from 'react-router-dom';
import './header.scss';
import { CompanyName } from '../index';

const Header = ({ userName = "" }) => {
    const history = useHistory();
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        history.replace('/login');
    }
    return (
        <div className="header">
            <CompanyName />
            <div className="header__details">
                {userName}
                <img src={require('../../../__assets__/profile.svg')} width="40px" height="40px" />
                <img src={require('../../../__assets__/off.svg')} onClick={handleLogout} width="25px" height="25px"/>
            </div>
        </div>
    );
}

export default Header;