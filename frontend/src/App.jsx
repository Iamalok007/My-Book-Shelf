import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks.jsx'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/books/create' element={<CreateBooks/>}></Route>
      <Route path='/books/edit/:id' element={<EditBook/>}></Route>
      <Route path='/books/delete/:id' element={<DeleteBook/>}></Route>
      <Route path='/books/details/:id' element={<ShowBook/>}></Route>
    </Routes>
  )
}

export default App
