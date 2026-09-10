import { useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  const [activePage, setActivePage] = useState('Upload')

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div>
        <h1>Study Notes Assistant</h1>
        <p>You're viewing: {activePage}</p>
      </div>
    </div>
  )
}

export default App