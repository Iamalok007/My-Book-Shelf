import React, { useEffect, useState } from 'react';

import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from "../components/Spinner";
import BackButton from '../components/BackButton';


const ShowBook = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const [loading, setLoading] =useState(false)



  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
      .then(res => {
        console.log(res.data);
        setBook(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      });
    },[])
  
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Book</h1>

      {loading ? <Spinner/> : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              Id
            </span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              title
            </span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              author
            </span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              Published Date
            </span>
            <span>{book.publishYear}</span>
          </div>
          
        </div>
      )}
      
    </div>
  )
}

export default ShowBook;
