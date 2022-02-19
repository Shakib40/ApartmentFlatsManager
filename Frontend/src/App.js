import { Routes, Route } from 'react-router-dom'
import {List} from './components/List.jsx'
import {Navbar} from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/flat" element={<List />}>
          {' '}
        </Route>
      </Routes>
    </div>
  )
}

export default App
