import './header.css'
import { IoIosArrowBack } from "react-icons/io";

export const Header = () => {
  return (
    <div className='header'>
        <IoIosArrowBack className='left-arrow'/>
       <p>september <span>2020</span></p>
       <IoIosArrowBack className='right-arrow'/>
    
    </div>
  )
}
