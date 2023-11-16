import './styles/app.css'

export default function App() {
  return (
    <div className='app'>
      <header className='header'>
        <p className='logo'>Logo</p>
        <button>Logo</button>
      </header>

      <main className='main'>
        <h1 className='title'>Give me your thoughts</h1>

        <div>
          <input type='text' />
        </div>

        <ul className='toughts'>
          <li className='tought'>My first tought</li>
        </ul>
      </main>
    </div>
  )
}
