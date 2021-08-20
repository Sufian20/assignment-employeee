import React from 'react';
import './Emloyees_details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const EmployeeDtails = (propos) => {
    const handelAddEmployee = propos.handelAddEmployee;
   const {first_name, last_name, email, phone, sellary, avatar} = propos.employee;
    return (
        <div className="employes_ditais">
            <div className="emply-img"> 
                <img src={avatar} alt="" />
            </div>
           <div className="emply">
           <h4>First Name: {first_name}</h4>
            <h4>Last Name: {last_name}</h4>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Sellary: ${sellary}</p>
            <button className="add-btn" onClick={()=>handelAddEmployee(propos.employee)}>Add to cart <FontAwesomeIcon icon={faPlus} /></button>
           </div>
        </div>
    );
};

export default EmployeeDtails;