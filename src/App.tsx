import { useState } from 'react'
import MainPageComponent from './components/mainPage'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainPageComponent/>
    </div>
  )
}

export default App
