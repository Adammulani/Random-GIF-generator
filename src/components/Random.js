import React, { useState } from 'react'

export const Random = () => {
    const [gif,setGif]=useState('');

    function clickHandler(event){

    }
  return (
    <div className='bg-green-400 w-1/2 h-[450px] mt-[120px] rounded-lg border border-black
    flex flex-col items-center gap-y-5 '>
        <h1 className='text-2xl underline  uppercase font-bold'>A Random Gif</h1>
        <img src={gif} width="450"></img>
        <button
        className='bg-yellow-200 w-10/12 text-xl rounded-lg py-2'
         onClick={clickHandler}>Generate Gif</button>
    </div>
  )
}
