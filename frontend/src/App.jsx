import { useState } from 'react'
import Sidebar from './components/Sidebar'
import FileUpload from './components/FileUpload'
import ChatWindow from './components/ChatWindow'

function App() {
  const [activePage, setActivePage] = useState('Upload')

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div>
        <h1>Study Notes Assistant</h1>
        <p>You're viewing: {activePage}</p>
        {activePage === 'Upload' && <FileUpload />}
        {activePage === 'Chat' && <ChatWindow />}
      </div>
    </div>
  )
}

export default App