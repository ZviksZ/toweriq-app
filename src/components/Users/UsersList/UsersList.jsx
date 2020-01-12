import React from 'react'

export default ({users}) => (
   <table className="table">
      <thead>
      <tr>
         <th>Id</th>
         <th>Имя</th>
         <th>Фамилия</th>
         <th>Описание</th>
      </tr>
      </thead>
      <tbody>
      {users.map(item =>(
         <tr key={item.id} className="users-table__row">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.desc}</td>
         </tr>
      ))}
      </tbody>
   </table>
)