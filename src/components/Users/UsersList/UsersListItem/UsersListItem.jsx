import React from 'react'

export const UsersListItem = ({item}) => (
   <tr key={item.id} className="users-table__row">
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.surname}</td>
      <td>{item.desc}</td>
   </tr>
)