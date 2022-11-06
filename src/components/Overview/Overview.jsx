import React from 'react'
import OverviewCard from '../OverviewCards/OverviewCard'

const Overview = () => {
  return (
    <>
      <div className='container'>
        <div className='card_top d-flex justify-content-between align-content-center'>
          <h5 className='card-reposit'>Popular repositories</h5>
          <a href='#' className='fs-5'>
            Custtomber
          </a>
        </div>
        <div className='row'>
          <OverviewCard />
        </div>
      </div>
    </>
  )
}

export default Overview
