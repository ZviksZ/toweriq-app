import {createSelector}   from "reselect";

export const getUsersSelector = state => state.users.users;
export const getCurrentPageSelector = state => state.users.currentPage;
export const getPageSizeSelector = state => state.users.pageSize;
export const getRandomUserSelector = state => state.users.randomUser;

export const getCurrentUsers = createSelector(
   [getUsersSelector, getCurrentPageSelector, getPageSizeSelector],
   (users, currentPage, pageSize) => {
      const indexOfLast = currentPage * pageSize;
      const indexOfFirst = indexOfLast - pageSize;
      return users.slice(indexOfFirst, indexOfLast);
   }
)

export const getPageNumbers = createSelector(
   [getUsersSelector, getPageSizeSelector],
   (users, pageSize) => {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(users.length / pageSize); i++) {
         pageNumbers.push(i);
      }      
      return pageNumbers
   }
)
