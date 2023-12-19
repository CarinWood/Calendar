import { useEffect, useState } from 'react'
import { Daylist } from '../../data/Daylist'
import { Day } from '../day/Day'
import './days.css'

export const Days = () => {
    const [dayList, setDayList] = useState(Daylist)


  return (
    <section className='days'>
        {Daylist.map((item) => {
           return <Day 
                        key={item.id} 
                        id={item.id} 
                        num={item.num} 
                        color={item.color} 
                        bg={item.bg} 
                        active={item.active} 
                    />
        })}

    </section>
  )
}
