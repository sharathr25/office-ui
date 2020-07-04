import React, { useEffect, useState }  from 'react';
import Axios from 'axios';
import EmployeeRow from '../EmployeeRow';
import config from '../../../config';
const { API_URL } = config;
import './employees.scss';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(false);

    const fetchEmployees = () => {
        const token = sessionStorage.getItem('token');
        Axios({
            method: 'GET',
            url: `${API_URL}/api/employees`,
            headers: {
                'Authorisation': token,
            },
        })
        .then(res => {
            const { data } = res;
            setEmployees(data);
        })
        .catch(err => {
            console.log(err)
            setError(true)
        })
    }
    useEffect(() => {
        fetchEmployees();
    }, [])

    const deleteEmployee = (id) => {
        Axios({
            url: `${API_URL}/api/employees/${id}`,
            method: 'DELETE',
            headers: {
                'authorisation': sessionStorage.getItem('token')
            }
        })
        .then((res) => {
            setEmployees(employees.filter(employee => employee._id !== id))
        })
        .catch(err => {
            console.log(err);
        })
    }

    return error 
        ?   <div className="employees">
                <p>Error</p>
            </div> 
        :   <div className="employees">
                <div className="employee-row employee-row--no-bg">
                    <div className="employee-row__name">Name</div>
                    <div className="employee-row__team">Team</div>
                    <div className="employee-row__role">Role</div>
                    <div className="employee-row__actions">Action</div>
                </div>
                {employees.map((employee, i) => 
                    <EmployeeRow    
                        employee={employee} 
                        key={i} 
                        deleteEmployee={deleteEmployee} 
                    />
                )}
            </div>
}


export default Employees;