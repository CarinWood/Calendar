import './day.css'

// eslint-disable-next-line react/prop-types
export const Day = ({id, num, bg, color, active}) => {

  return (
    <article 
       
        className={bg === 'gray' ? 'box gray': 'box'}
    >
        {active === true ? 
        <div className='dot'>
            <p className='active-num'>{num}</p>
        </div>
        :
        <p className={color === 'gray' ? 'num color-gray': 'num'}>{num}</p>
        }
       
    </article>
  )
}
