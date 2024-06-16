'use client'
import React from 'react'
import style from "./pagination.module.css";
import { useRouter } from 'next/navigation';

const Pagination = ({page, lastPage}) => {
  const router = useRouter()

  const first = page !== 1; 
  const last = page < lastPage;
  return (
    <>
      <div className={style.container}>
        
          <button
            disabled={!first}
            className={style.button}
            onClick={() => router.push(`?page=${page - 1}`)}
          >
            Previous
          </button>
        

        
          <button
            className={`${style.button} ${style.next}`}
            disabled={!last}
            onClick={() => router.push(`?page=${page + 1}`)}
          >
            Next
          </button>
        
      </div>
      <p className={style.pageCount}>
        {page} / {lastPage}
      </p>
    </>
  );
};

export default Pagination;