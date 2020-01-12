import React                                                                                              from 'react'
import {connect}                                                                                          from "react-redux";
import {getCurrentPageSelector, getCurrentUsers, getPageNumbers, getRandomUserSelector, getUsersSelector} from "../../redux/selectors/users-selectors.js";
import {requestUsers, setCurrentPage, setRandomUser}                                                      from "../../redux/usersReducer.js";
import {arrayRandElement}                                                                                 from "../../utils";
import {Pagination}                                                                                       from "../common/Pagination/Pagination.jsx";
import {RandomUser}                                                                                       from "./RandomUser/RandomUser.jsx";
import UsersList                                                                                          from "./UsersList/UsersList.jsx";

class Users extends React.Component {
   componentDidMount() {      
      this.props.requestUsers()      
     
      this.interval = setInterval(() => {
         this.props.setRandomUser(arrayRandElement(this.props.users))
         setTimeout(() => this.props.setRandomUser(null), 1500)
      }, 8000);
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }
   
   render() {
      console.log(this.props.randomUser)
      const {currentUsers, pageNumbers, currentPage, setCurrentPage, randomUser} = this.props
      return (
         <>
            <h3>Users:</h3>
            <UsersList users={currentUsers}/>
            <Pagination pages={pageNumbers}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>

            <RandomUser user={randomUser}/>
         </>

      )
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUsersSelector(state),
      currentUsers: getCurrentUsers(state),
      pageNumbers: getPageNumbers(state),
      randomUser: getRandomUserSelector(state),
      currentPage: getCurrentPageSelector(state)
   }
}

export default connect(mapStateToProps, {requestUsers, setCurrentPage, setRandomUser})(Users);