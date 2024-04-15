import React, { useEffect, useState } from "react";
import { Axios} from "axios";
import { Spinner } from "./Spinner";
import { useGif } from "../hooks/useGif";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const Random = () => {

  
  const {gif,loading,fetchData}=useGif();
   

 
  return (
    <div
      className="bg-green-400 w-1/2  mt-[120px] rounded-lg border border-black
    flex flex-col items-center gap-y-5 "
    >
      <h1 className="text-2xl underline  uppercase font-bold mt-[15px]">A Random Gif</h1>

    {
       loading?(<Spinner/>):( <img src={gif} width="450"></img>)
    }
     
      <button
        className="bg-yellow-200 w-10/12 text-xl rounded-lg py-2 mb-[20px]"
        onClick={()=>fetchData()}
      >
        Generate Gif
      </button>
    </div>
  );
};
