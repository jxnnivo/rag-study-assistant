function Sidebar ({ activePage, onNavigate }) {
  const pages = ['Upload', 'Chat', 'Quiz', 'Settings']

  return (
    <nav>
      <h2>Study Assistant</h2>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <button onClick={() => onNavigate(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar