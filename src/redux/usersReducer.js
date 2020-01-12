import users from '../users'

const SET_USERS = 'toweriq/users/SET_USERS';
const SET_CURRENT_PAGE = 'toweriq/users/SET_CURRENT_PAGE';

let initialState = {
   users: [],
   pageSize: 5,
   currentPage: 1,
   activeUser: {}
};

const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_USERS:
         return {
            ...state,
            users: action.users
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.page
         }
      default:
         return state;
   }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})

export const requestUsers = () => async (dispatch) => {
   dispatch(setUsers(users.users))
}


export default usersReducer;