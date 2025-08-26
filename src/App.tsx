import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Data from './pages/Data'
import Layout from './Layout/Layout'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="data" element={<Data />} />
      </Route>
    </Routes>
  )
}

export default App
