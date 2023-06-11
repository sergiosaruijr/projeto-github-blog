import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/index'
import { Issue } from './pages/Issue/index'
import { Teste } from './pages/Teste'
import { Teste2 } from './pages/Teste2'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issue" element={<Issue />} />
      <Route path="/teste" element={<Teste />} />
      <Route path="/teste2" element={<Teste2 />} />
    </Routes>
  )
}
