'use client'
import React from 'react'
import style from "./pagination.module.css";
import { useRouter } from 'next/navigation';

const Pagination = ({page, lastPage}) => {
console.log(lastPage)
  const router = useRouter()
  return (
    <>
      <div className={style.container}>
        {page !== 1 && (
          <button
            disabled={page === 1}
            className={style.button}
            onClick={() => router.push(`?page=${page - 1}`)}
          >
            Previous
          </button>
        )}

        {page < lastPage && (
          <button
            className={`${style.button} ${style.next}`}
            onClick={() => router.push(`?page=${page + 1}`)}
          >
            Next
          </button>
        )}
      </div>
      <p className={style.pageCount}>
        {page}/{lastPage}
      </p>
    </>
  );
};

export default Pagination;