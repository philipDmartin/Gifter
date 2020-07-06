// import React, { useState } from 'react'

// export const UserContext = React.createContext()

// export const UserProvider = props => {
//   const [users, setUsers] = useState([])

//   const getUsers = () => {
//     return fetch('http://localhost:8088/users')
//       .then(res => res.json())
//       .then(parsedUsers => {
//         setUsers(parsedUsers)
//       })
//   }

//   const getUsersPost = () => {
//     return fetch('http://localhost:8088/usersPost')
//       .then(res => res.json())
//       .then(parsedUsers => {
//         setUsers(parsedUsers)
//       })
//   }

//   const addUser = user => {
//     return fetch('http://localhost:8088/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     }).then(getUsers)
//   }

//   const getUserById = id => {
//     return fetch(`/api/user/${id}`).then(res => res.json())
//   }

//   return (
//     <UserContext.Provider value={{ users, getUsers, addUser, getUserById }}>
//       {props.children}
//     </UserContext.Provider>
//   )
// }
