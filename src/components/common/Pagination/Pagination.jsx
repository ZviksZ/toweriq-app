import React from 'react'

export const Pagination = ({pages, currentPage, setCurrentPage}) => {
   const changePage = (page) => {
      setCurrentPage(page)
   }
   return (
      <ul className="pagination pagination-sm">
         {pages.map(page => {
            if (page === currentPage) {
               return <li className="page-item active"
                          id={page}
                          key={page}
                          aria-current="page"
                          onClick={() => changePage(page)}>
                  <a className="page-link bg-info" href="#">{page}</a>
               </li>
            }
            return <li className="page-item"
                       id={page}
                       key={page}
                       onClick={() => changePage(page)}>
               <a className="page-link" href="#">{page}</a>
            </li>
         })}
      </ul>
   )
}