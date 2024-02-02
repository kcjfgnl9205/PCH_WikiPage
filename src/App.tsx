import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Add, Detail, Edit, List, NotFound } from '@/pages'
import routes from '@/routes'

export default function App() {
  return (
    <div className='max-w-5xl mx-auto h-full'>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<List />} />
          <Route path={routes.add} element={<Add />} />
          <Route path={`/:id${routes.edit}`} element={<Edit />} />
          <Route path='/:id' element={<Detail />} />

          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
