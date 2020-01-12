import React from 'react'

export default ({users}) => (
   <table className="table">
      <thead>
      <tr>
         <th>Id</th>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Desc</th>
      </tr>
      </thead>
      <tbody>
      {users.map(item =>(
         <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.desc}</td>
         </tr>
      ))}
      </tbody>
   </table>
)