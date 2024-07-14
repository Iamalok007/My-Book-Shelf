import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsBookshelf, BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

function BooksTable({books}) {
  return (
    <table className='w-full border-separate border-spacing-2'>
    <thead>
      <tr>
        <th className='border border-slate-600 rounded-md'>No.</th>
        <th className='border border-slate-600 rounded-md'>title</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
        <th className='border border-slate-600 rounded-md'>Operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book,index)=>(
        <tr key={book._id} className='h-8'>
          <td className='border border-slate-600 rounded-md text-center'>{index+1}</td>
          <td className='border border-slate-600 rounded-md text-center'>{book.title}</td>
          <td className='border border-slate-600 rounded-md max-md:hidden text-center'>{book.author}</td>
          <td className='border border-slate-600 rounded-md max-md:hidden text-center'>{book.publishYear}</td>
          <td className='border border-slate-600 rounded-md text-center'>
            <div className='flex justify-center gap-x-4'>
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className='text-xl text-blue-500 mx-2' />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className='text-xl text-yellow-500 mx-2' />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className='text-xl text-red-500 mx-2' />
            </Link>
            </div>
          </td>
        </tr>

      ))}
    </tbody>
  </table>
  )
}

export default BooksTable
