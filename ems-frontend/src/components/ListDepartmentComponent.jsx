import React, { useState } from 'react'

const ListDepartmentComponent = () => {

    
    let dummyData = [
        {
            "id": 1,
            "departmentName": "R&D",
            "deparmentDescription": "Research and Development department"
        },
        {
            "id": 2,
            "departmentName": "HR",
            "deparmentDescription": "Human Resources department"
        }
    ]

    const [departments, setDepartments]= useState(dummyData);

  return (
    <div className='container'>
        <h2 className="text-center">List of Departments</h2>
        <button className='btn btn-primary'>Add Department</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Department Id</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
                    {/* <th>Actions</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map( department => 
                    <tr key={department.id}>
                        <td>{department.id}</td>
                        <td>{department.departmentName}</td>
                        <td>{department.deparmentDescription}</td>
                    </tr>
                    )
                }

            </tbody>
        </table>
    </div>
  )
}

export default ListDepartmentComponent