import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import { Header } from '../../components';
import './home.scss';

const Home = () => {
    const location = useLocation();
    const [employee, setEmployee] = useState(null);
    const { state } = location;

    useEffect(() => {
        if(state && employee in state) {
            const { employee } = state;
            setEmployee(employee);
        } else {
            const id = sessionStorage.getItem('employeeID');
            const token = sessionStorage.getItem('token');
            Axios({
                method: 'GET',
                url: `http://localhost:3001/api/employees/${id}`,
                headers: {
                    'Authorisation': token,
                },
            }).then((res) => {
                const { data } = res;
                setEmployee(data);
            }).catch(err => {
                console.log(err);
            })
        }
    },[])

    return (
        <div className="home">
            <Header userName={employee ? employee.name : ""} />
            {employee 
                ?   <div className="home__content">
                        <div className="home__name">{employee.name}</div>
                        <div className="home__role">{employee.role.charAt(0).toUpperCase()}{employee.role.slice(1)} Role</div>
                        <div className="home__team">{employee.team}</div>
                    </div> 
                :   <div className="home__error">
                    </div>
            }
        </div>
    );
}

export default Home;