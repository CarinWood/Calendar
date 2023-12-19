import './App.css'
import { Days } from './components/days/Days'
import { Header } from './components/header/Header'
import { Week } from './components/week/Week'

function App() {
  return (
    <div className='app'>
      <Header/>
      <Week/>
      <Days/>
    </div>
  )
}

export default App
