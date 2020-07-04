import React, { useState } from 'react';
import Axios from 'axios';
import qs from 'querystring';
import './employee-form.scss';
import Input from '../Input';
import config from '../../../config';
const { API_URL } = config;

const EmployeeForm = (props) => {
    const { toggleForm, employee } = props;
    const { name: oldName = "", email: oldEmail = "", _id, team: oldTeam = "", role: oldRole = "" } = employee || {};
    const [name, setName] = useState(oldName);
    const [email, setEmail] = useState(oldEmail);
    const [password, setPassword] = useState("");
    const [team, setTeam] = useState(oldTeam);
    const [role, setRole] = useState(oldRole);

    const teams = ['Dev Team', 'UX Team', 'QA Team'];
    const roles = ['admin', 'read', 'write']

    const handleNameChange = (e) => setName(e.target.value)

    const handleEmailChange = (e) => setEmail(e.target.value); 

    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleTeamChange = (e) => setTeam(e.target.value);

    const handleRoleChange = (e) => setRole(e.target.value);

    const save = () => {
        const url = _id ? `${API_URL}/api/employees/${_id}` : `${API_URL}/api/register`
        const method = _id ? 'PUT' : 'POST';
        const token = sessionStorage.getItem('token');
        Axios({
            url,
            method,
            headers: { 'authorisation' : token },
            data: qs.stringify({ email, password, name, team, role }),
        })
        .then(res => {
            console.log(res, "*****");
            console.log(toggleForm)
            toggleForm();
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="employee-form">
            <div className="employee-form__body">
                <div className="employee-form__sub-title">Add / Edit</div>
                <div className="employee-form__title">Employee</div>
                <div className="employee-form__inputs">
                    <Input label="Name" type="text" onChange={handleNameChange} value={name} />
                    <Input label="Email" type="text" onChange={handleEmailChange} value={email} />
                    <Input label="Password" type="password" onChange={handlePasswordChange} value={password} />
                    <div className="employee-form__selector">   
                        <div className="employee-form__options">
                            <div className="employee-form__options-title">Team</div>
                            <div className="employee-form__options-values">
                                {teams.map((teamName, i) => 
                                    <label className="employee-form__options-value" key={i}>
                                        <input type="radio" value={teamName} onChange={handleTeamChange} checked={team === teamName} />
                                        {teamName}
                                    </label>
                                )}
                            </div>
                        </div>
                        <div className="employee-form__options">
                            <div className="employee-form__options-title">Role</div>
                            <div className="employee-form__options-values">
                                {roles.map((roleName, i) => 
                                    <label className="employee-form__options-value" key={i}>
                                        <input type="radio" value={roleName} onChange={handleRoleChange} checked={role === roleName} />
                                        {roleName.charAt(0).toUpperCase() + roleName.slice(1)}
                                    </label>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="employee-form__actions">
                        <button className="employee-form__actions-close" onClick={toggleForm}>Close</button>
                        <button className="employee-form__actions-save" onClick={save}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeForm;