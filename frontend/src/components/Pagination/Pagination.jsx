import React from 'react';
import ReactPaginate from 'react-paginate';
import chevronRight from '@/assets/icon/chevron-right.svg';
import chevronLeft from '@/assets/icon/chevron-left.svg';
import Image from 'next/image';
import './pagination.css';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage === totalPages - 1;

    // disable pagination if there is only one page
    if (totalPages === 1) return null;
    
    return (
        <>
            <ReactPaginate                
                breakLabel="..."
                nextLabel= {<Image src={chevronRight} alt="right icon" />}
                onPageChange={onPageChange}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel={<Image src={chevronLeft} alt="left arrow" />}
                renderOnZeroPageCount={null}
                forcePage={currentPage}
                containerClassName="pagination"
                pageClassName="page-item"
                activeClassName='active'
                previousClassName= {`prev-item ${isFirstPage ? 'hidden' : ''}`}
                nextClassName= {`next-item ${isLastPage ? 'hidden' : ''}`}
            />
        </>
    );
}
