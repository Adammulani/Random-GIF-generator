import React, { useEffect, useState } from "react";
import { Axios} from "axios";
import { Spinner } from "./Spinner";
import { useGif } from "../hooks/useGif";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY

export const Tag = () => {
  
  const [tag,setTag]=useState('');
  const {gif,loading,fetchData}=useGif(tag);


  
  return (
    <div
      className="bg-green-400 w-1/2  mt-[120px] rounded-lg border border-black
    flex flex-col items-center gap-y-5 "
    >
      <h1 className="text-2xl underline  uppercase font-bold mt-[15px]"> Random {tag} Gif</h1>

    {
       loading?(<Spinner/>):( <img src={gif} width="450"></img>)
    }
    <input
    className="w-10/12 text-xl rounded-lg py-2 mb-[3px] text-center"
    onChange={(event)=>setTag(event.target.value)}
    value={tag}></input>
     
      <button
        className="bg-yellow-200 w-10/12 text-xl rounded-lg py-2 mb-[20px]"
        onClick={()=>    fetchData(tag)
        }
      >
        Generate Gif
      </button>
    </div>
  );
};
