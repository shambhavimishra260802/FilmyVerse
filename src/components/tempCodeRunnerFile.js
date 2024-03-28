import React, {useState, TailSpin} from 'react'
import ReactStars from 'react-stars'
import { reviewsRef } from './firebase/firebase';
import { addDoc } from 'firebase/firestore';

const Reviews = () => {
  const [rating, setRating] =useState(0);
  const [loading, setLoading]= useState(true);
  return (

    <div className ='mt-4 py-1 border-t-2 border-gray-700 w-full'>
    <ReactStars
      size={30}
      half={true}
      onChange={(rate) => setRating(rate)}
    />
      <input
      placeholder='Share your thoughts '
      className='w-full p-2 outline-none header'/>
      <button className='bg-green-600 flex justify-centre w-full p-2'>
        {loading ? <TailSpin height={20} color="white"/> : 'Share'}
      </button>
    </div>
  )
}

export default Reviews

