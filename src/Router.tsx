import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/index'
import { Issue } from './pages/Issue/index'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issue" element={<Issue />} />
    </Routes>
  )
}
