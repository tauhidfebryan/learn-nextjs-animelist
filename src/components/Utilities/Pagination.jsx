import React from 'react'

const Pagination = ({ page, lastPage, setPage }) => {

  const scrollTop = () => {
    setTimeout(() => {
      scrollTo({
        behavior: "smooth",
        top: 0
      })
    }, 50);
  }

  const handlePrev = () => {
    if (page === 1) return
    setPage((prevState) => prevState - 1)
    scrollTop()
  }

  const handleNext = () => {
    if (page === lastPage) return
    setPage((prevState) => prevState + 1)
    scrollTop()
  }

  return (
    <div className='flex justify-center items-center text-xl gap-2'>
      <button onClick={handlePrev} className='text-amber-600 hover:text-amber-800 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' disabled={page === 1}>PREV</button>
      <p>{page} of {lastPage}</p>
      <button onClick={handleNext} className='text-amber-600 hover:text-amber-800 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' disabled={page === lastPage}>NEXT</button>
    </div>
  )
}

export default Pagination