import React from 'react'
import ArrowDownIcon from '../public/statics/svg/iconmonstr-arrow-65.svg';

const WeekChanger = ({setDate}) => {
  return (
    <>        
        <ArrowDownIcon className="prevIcon" onClick={() => setDate('prev')}/>
        <ArrowDownIcon className="nextIcon" onClick={() => setDate('next')}/>
    </>
  )
}

export default WeekChanger