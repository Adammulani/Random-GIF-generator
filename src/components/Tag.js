import React, { useEffect, useState } from "react";
import { Axios} from "axios";
import { Spinner } from "./Spinner";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY

export const Tag = () => {
  const [gif, setGif] = useState("");
  const [loading,setLoading]=useState(false);
  const [tag,setTag]=useState('');

  async function fetchData(){
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    try {
        setLoading(true);
        const res=await fetch(url);  //fetch data from api
        const {data}=await res.json();  //convert data to json format
        //const imageSource=data
        const imageSource=data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    } catch (error) {
        console.log("Something went wrong")
    }
    
  }
  
  function changeHandler(event){
    setTag(event.target.value);
  }
  useEffect(()=>{
    fetchData();

  },[]);

  function clickHandler(event) {
    fetchData();
  }
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
    onChange={changeHandler}
    value={tag}></input>
     
      <button
        className="bg-yellow-200 w-10/12 text-xl rounded-lg py-2 mb-[20px]"
        onClick={clickHandler}
      >
        Generate Gif
      </button>
    </div>
  );
};
