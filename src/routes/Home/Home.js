import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Header, EmployeeForm } from '../../components';
import config from '../../../config';
const { API_URL } = config;
import './home.scss';

const Home = () => {
    const location = useLocation();
    const history = useHistory();
    const [employee, setEmployee] = useState(null);
    const { state } = location;
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if(!sessionStorage.getItem('token')) {
            history.replace('/login');
            return;
        };
        if(state && employee in state) {
            const { employee } = state;
            if(employee.role === 'admin') history.replace('/admin');
            setEmployee(employee);
        } else {
            const id = sessionStorage.getItem('employeeID');
            const token = sessionStorage.getItem('token');
            Axios({
                method: 'GET',
                url: `${API_URL}/api/employees/${id}`,
                headers: {
                    'Authorisation': token,
                },
            }).then((res) => {
                const { data } = res;
                if(data.role === 'admin') history.replace('/admin');
                setEmployee(data);
            }).catch(err => {
                console.log(err);
            })
        }
    },[]);

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    return (
        <>
        <div className="home">
            <Header userName={employee ? employee.name : ""} />
            {employee 
                ?   <div className="home__content">
                        <div className="home__name">{employee.name}</div>
                        <div className="home__role">{employee.role.charAt(0).toUpperCase()}{employee.role.slice(1)} Role</div>
                        <div className="home__team">{employee.team}</div>
                        <img className="employee-row__img" src={require('../../../__assets__/edit.svg')} onClick={toggleForm} />
                    </div> 
                :   <div className="home__error">
                    </div>
            }
        </div>
        {showForm ? <EmployeeForm toggleForm={toggleForm} employee={employee} setEmployee={setEmployee} /> : null}
        </>
    );
}

export default Home;