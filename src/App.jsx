import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Projects } from './pages/Projects'
import { Home } from './pages/Home'
import { HireMe } from './pages/Hireme'
import { Layout } from './pages/Layout'

export default function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/Projects" element = {<Projects />} />
                <Route path="/Hireme" element = {<HireMe />} />
            </Route>
        </Routes>
    </Router>
    </>
  )
}

