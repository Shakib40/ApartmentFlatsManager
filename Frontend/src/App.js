import { Routes, Route } from 'react-router-dom'
import {List} from './components/List/List'
import {Navbar} from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <h1>List</h1>
      <Navbar />
      
      {/* <Routes>
        <Route exact path="/flat" element={<List />}>
          {' '}
        </Route>
      </Routes> */}
    </div>
  )
}

export default App
