import './App.css'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <div className='text-2xl font-bold bg-amber-50'>Hello world</div>
      <Button className='mt-4'>Click me</Button>
    </div>
  )
}

export default App
