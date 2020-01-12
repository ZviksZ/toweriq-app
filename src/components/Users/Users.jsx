import React                                                     from 'react'
import {connect}                                                 from "react-redux";
import {getCurrentPageSelector, getCurrentUsers, getPageNumbers} from "../../redux/selectors/users-selectors.js";
import {requestUsers, setCurrentPage}                            from "../../redux/usersReducer.js";
import {Pagination}                                              from "../common/Pagination/Pagination.jsx";
import UsersList                                                 from "./UsersList/UsersList.jsx";

class Users extends React.Component {   
   componentDidMount() {
      this.props.requestUsers()
   }   
   render() {
      return (
         <>
            <h3>Users:</h3>
            <UsersList users={this.props.currentUsers}/>
            <Pagination pages={this.props.pageNumbers} 
                        currentPage={this.props.currentPage} 
                        setCurrentPage={this.props.setCurrentPage}/>
         </>
        
      )
   }
}

let mapStateToProps = (state) => {
   return {
      currentUsers: getCurrentUsers(state),
      pageNumbers: getPageNumbers(state),
      currentPage: getCurrentPageSelector(state)
   }
}

export default connect(mapStateToProps, {requestUsers, setCurrentPage})(Users);