import React           from 'react'
import {UsersListItem} from "./UsersListItem/UsersListItem.jsx";

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
         {users.map(item => <UsersListItem key={item.id} item={item}/> )}
      </tbody>
   </table>
)