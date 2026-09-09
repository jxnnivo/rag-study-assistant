import Sidebar from './components/Sidebar'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div>
        <h1>Study Notes Assistant</h1>
        <p>Upload your notes, ask questions, and quiz yourself — all in one place.</p>
      </div>
    </div>
  )
}

export default App