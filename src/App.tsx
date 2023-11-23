import { useThoughts } from './hooks/use-thoughts'
import { ThoughtsList } from './components/thoughts-list'
import './styles/app.css'

export default function App() {
  const { thoughts, updateThoughts } = useThoughts()

  return (
    <div className='app'>
      <header className='header'>
        <span className='logo'>Logo</span>
        <button>Logo</button>
      </header>

      <main className='main'>
        <ThoughtsList thoughts={thoughts} updateThoughts={updateThoughts} />
      </main>
    </div>
  )
}
