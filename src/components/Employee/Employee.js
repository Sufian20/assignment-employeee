import React, { useEffect, useState } from 'react';
import EmployeeDtails from '../EmployeeDetails/EmployeeDtails';
import data from '../Data/data.json';
import './Employee.css'
import Cart from '../Cart/Cart';


const Employee = () => {

    const [employees, setEmployee] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        setEmployee(data)
    },[])

    const handelAddEmployee = (employees) => {
        const newCart = [...cart, employees];
        setCart(newCart)
        
    }
    
    return (
        <div className="employee-container">
            <div className="employees-diteils">
              {
                employees.map(employee=> <EmployeeDtails handelAddEmployee={handelAddEmployee} employee={employee} key={employee.id}></EmployeeDtails>) 
              }
            </div>
            <div>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Employee;