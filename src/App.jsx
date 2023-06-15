import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { FrontRoutes } from './routes/FrontRoutes';


function App() {

  return (
    <>
      <BrowserRouter>
        <FrontRoutes />
      </BrowserRouter>
    </>
  )
}

export default App