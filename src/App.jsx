import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Bank</h1>
          
          <p>Your reliable partner in managing financial with ease and security.</p>
          <a href="/get-started" className="cta-button">Get Started</a> 
        </div>
      </section>
      </div>
      
    </>
  )
}

export default App;