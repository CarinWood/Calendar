import { useEffect, useState } from 'react'
import { Daylist } from '../../data/Daylist'
import { Day } from '../day/Day'
import './days.css'

export const Days = () => {
    const [dayList, setDayList] = useState(Daylist)

    const setDayActive = (id) => {
        const updatedDayList = dayList.map((day) => ({
            ...day,
            active: day.id === id,
          }));
          setDayList(updatedDayList);
        
    }

    const getActiveValue = (id) => {
        const filteredList = dayList.filter((day) => day.id === id)
        return filteredList[0].active
    }

    useEffect(() => {
    }, [setDayActive])

    


  return (
    <section className='days'>
        {Daylist.map((item) => {
           return <Day 
                        key={item.id} 
                        id={item.id} 
                        num={item.num} 
                        color={item.color} 
                        bg={item.bg} 
                        active={getActiveValue(item.id)} 
                        setDayActive={setDayActive}
                    />
        })}

    </section>
  )
}
