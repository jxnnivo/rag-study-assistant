import { useState } from 'react'
import Sidebar from './components/Sidebar'
import FileUpload from './components/FileUpload'

function App() {
  const [activePage, setActivePage] = useState('Upload')

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div>
        <h1>Study Notes Assistant</h1>
        <p>You're viewing: {activePage}</p>
        {activePage === 'Upload' && <FileUpload />}
      </div>
    </div>
  )
}

export default App