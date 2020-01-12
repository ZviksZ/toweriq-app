import React from 'react'

export const RandomUser = ({user}) => {
   return (
      user ? <div>{user.name}</div> : <div>NOOOOO</div>
   )
   
}