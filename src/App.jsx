import { useState } from 'react'
import OutputBar from './Components/OutputBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-11/12 md:w-1/2'>
      <h1 className='text-neutral-100'>Password Generator</h1>
      <OutputBar />
    </div>
  )
}

export default App
