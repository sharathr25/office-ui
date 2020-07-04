import React from 'react';
import './employee-row.scss';

const EmployeeRow = (props) => {
    const { employee, setEmployeeToUpdate, deleteEmployee } = props;
    const { name, team, role, _id } = employee;

    const handleEdit = () => {
        setEmployeeToUpdate(employee);
    }

    const handleDelete = () => {
        deleteEmployee(_id)
    }

    return (
        <div className="employee-row">
            <div className="employee-row__name">{name}</div>
            <div className="employee-row__team">{team}</div>
            <div className="employee-row__role">{`${(role || "").charAt(0).toUpperCase()}${(role || "").slice(1)}`}</div>
            <div className="employee-row__actions">
                <img className="employee-row__img" src={require('../../../__assets__/edit.svg')} onClick={handleEdit} />
                <img className="employee-row__img" src={require('../../../__assets__/delete.svg')} onClick={handleDelete} />
            </div>
        </div>
    );
}

export default EmployeeRow;