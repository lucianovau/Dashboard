// import React from "react";

// export const Pagination = ({productsPage, currentPage, setCurrentPage, totalProducts}) => {

//     const pageNumbers = []

//     for (let i = 1; i <= Math.ceil(totalProducts / productsPage); i++){
//         pageNumbers.push(i)
//     }

//     const onPreviusPage = () => {
//         setCurrentPage(currentPage - 1)
//     }

//     const onNextPage = () => {
//         setCurrentPage(currentPage + 1)
//     }

//     const onSpecificPage = (n) => {
//         setCurrentPage()
//     }

//     return (
//         <nav aria-label="Page navigation example">
//             <ul className="pagination justify-content-center">
//                 <li className="page-item disabled">
//                     <a className={`page-link ${ currentPage === 1 ? 'is-disabled' : '' }`} onClick={onPreviusPage}>Previous</a>
//                 </li>
//                 {pageNumbers.map(noPage => (
//                     <li className="page-item" key={noPage}><a className={`page-link ${noPage === currentPage ? 'page-item active' : ''}`} onClick={() => onSpecificPage(noPage) }>{ noPage }</a></li>
//                 ))}
//                 <li className="page-item">
//                     <a className={`page-link ${ currentPage <= pageNumbers.length ? 'is-disabled' : '' }`} onClick={onNextPage}>Next</a>
//                 </li>
//             </ul>
// </nav>
//     )
// }

// import React from 'react';

// export const Pagination = ({ productsPage, currentPage, setCurrentPage, totalProducts }) => {
//   const pageCount = Math.ceil(totalProducts / productsPage);

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="pagination-container">
//       <ul className="pagination">
//         {Array.from({ length: pageCount }, (_, index) => (
//           <li key={index} className={`page-item ${currentPage === index ? 'active' : ''}`}>
//             <button className="page-link" onClick={() => handlePageClick(index)}>
//               {index + 1}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <li key={index} className={`page-item ${currentPage === index ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(index)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

