import React from 'react';
import { NavLink } from 'react-router-dom';

const Pagination = ({ coursesPerPage, totalCourses, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <a href="#" className="prev page-numbers mt-4">
                    <i className="bx bx-chevron-left" />
                </a>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <NavLink onClick={() => paginate(number)} to='/courses' className='page-link'>
                            <a href="#" className="page-numbers">{number}</a>
                        </NavLink>
                    </li>
                ))}
                 <a href="#" className="next page-numbers mt-4">
                  <i className="bx bx-chevron-right" />
                </a>
            </ul>
        </nav>
    );
};

export default Pagination;