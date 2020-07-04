import React, { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import { Header, Employees, EmployeeForm } from '../../components';
import config from '../../../config';
const { API_URL } = config;
import './admin.scss';

const Admin = () => {
    const [employee, setEmployee] = useState(null);
    const [buttonActive, setButtonActive] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [employeeToUpdate, setEmployeeToUpdate] = useState(null);
    const _onMouseEnter = () => setButtonActive(true);
    const _onMouseLeave = () => setButtonActive(false);
    const location = useLocation();
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
                url: `${API_URL}/api/employees/${id}`,
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

    const toggleForm = () => {
        if(showForm) setEmployeeToUpdate(null);
        setShowForm(!showForm);
    }
    const _setEmployeeToUpdate = (employee) => {
        setEmployeeToUpdate(employee);
        toggleForm();
    }

    return (
        <div className="admin">
            <Header userName={employee ? employee.name : ""}/>
            <div className="admin__content">
                <div className="admin__content-heading">
                    <div className="admin__content-title">Employee View</div>
                    <button 
                        className={`${buttonActive ? 'admin__add admin__add--hover' : 'admin__add'}`} 
                        onMouseEnter={_onMouseEnter} onMouseLeave={_onMouseLeave}
                        onClick={toggleForm}
                    >
                        Add Employee
                    </button>
                </div>
                <Employees setEmployeeToUpdate={_setEmployeeToUpdate} toggleForm={toggleForm} />
            </div>
            {showForm ? <EmployeeForm employee={employeeToUpdate} toggleForm={toggleForm} /> :   null}
        </div>
    );
}

export default Admin;