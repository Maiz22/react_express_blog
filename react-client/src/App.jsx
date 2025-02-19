import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import New from './components/pages/New'
import Join from './components/pages/Join'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="new" element={<New />} />
                    <Route path="join" element={<Join />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
