import React from 'react'

export const RandomUser = ({user}) => {   
   return (
      user && <div className="random-user__wrap">
            <div className="random-user">
               <h4>Случайный пользователь: <strong>{user.surname} {user.name}</strong></h4>               
            </div>            
      </div> 
   )   
}