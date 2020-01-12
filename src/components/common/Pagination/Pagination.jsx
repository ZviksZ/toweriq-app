import React from 'react'

export const Pagination = ({pages, currentPage, setCurrentPage}) => {
   const changePage = (page) => {
      setCurrentPage(page)
   }
   return (
      <ul className="pagination pagination-sm">
         {pages.map(page => {
               const active = page === currentPage
               return <li className={active ? "page-item active" : "page-item"}
                          id={page}
                          key={page}
                          aria-current={active ? 'page' : null}
                          onClick={() => changePage(page)}>
                  <a className={active ? "page-link bg-info" : "page-link"} href="#anchor">{page}</a>
               </li>
         })}
      </ul>
   )
}