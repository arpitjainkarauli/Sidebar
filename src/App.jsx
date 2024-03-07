import './App.css'
import { SiChatbot } from "react-icons/si";
import Sidebar from './assets/Components/Sidebar/Sidebar'
import Showcase from './assets/Components/Showcase/Showcase'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='main'>
      <div><Sidebar/></div>
      <div><Showcase/></div>
    </div>
    <div className="chatbot">
      <div>
        <SiChatbot/>
      </div>
    </div>
    </BrowserRouter>
    </>
  )
}
export default App
