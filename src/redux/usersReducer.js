import users from '../data/users'

const SET_USERS = 'toweriq/users/SET_USERS';
const SET_CURRENT_PAGE = 'toweriq/users/SET_CURRENT_PAGE';
const SET_RANDOM_USER = 'toweriq/users/SET_RANDOM_USER';

let initialState = {
   users: [],
   pageSize: 5,   
   currentPage: 1,
   randomUser: null
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
      case SET_RANDOM_USER:         
         return {            
            ...state,
            randomUser: action.user
         }
      default:
         return state;
   }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setRandomUser = (user) => ({type: SET_RANDOM_USER, user})

export const requestUsers = () => async (dispatch) => {
   dispatch(setUsers(users.users))
}


export default usersReducer;