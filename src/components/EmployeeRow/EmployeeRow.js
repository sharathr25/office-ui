import React, { useState } from 'react';
import EmployeeForm from '../EmployeeForm';
import './employee-row.scss';

const EmployeeRow = (props) => {
    const { deleteEmployee } = props;
    const [employee, setEmployee] = useState(props.employee)
    const { name, team, role, _id } = employee;
    const [showForm, setShowForm] = useState(false);

    const handleEdit = () => {
        toggleForm();
    }

    const handleDelete = () => {
        deleteEmployee(_id)
    }

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <>
            <div className="employee-row">
                <div className="employee-row__name">{name}</div>
                <div className="employee-row__team">{team}</div>
                <div className="employee-row__role">{`${(role || "").charAt(0).toUpperCase()}${(role || "").slice(1)}`}</div>
                <div className="employee-row__actions">
                    <img className="employee-row__img" src={require('../../../__assets__/edit.svg')} onClick={handleEdit} />
                    <img className="employee-row__img" src={require('../../../__assets__/delete.svg')} onClick={handleDelete} />
                </div>
            </div>
            {showForm ? <EmployeeForm toggleForm={toggleForm} employee={employee} setEmployee={setEmployee} isAdmin={true} /> : null}
        </>
    );
}

export default EmployeeRow;