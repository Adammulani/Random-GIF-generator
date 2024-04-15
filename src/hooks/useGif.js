import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif = (tag) => {
    const [gif, setGif] = useState("");
      const [loading,setLoading]=useState(false);
    
      async function fetchData(tag){
          
  
        try {
            setLoading(true);
            const res=await fetch(tag?`${url}&tag=${tag}`:url);  //fetch data from api
            const {data}=await res.json();  //convert data to json format
            //const imageSource=data
            const imageSource=data.images.downsized_large.url;
            setGif(imageSource);
            setLoading(false);
        } catch (error) {
            console.log("Something went wrong")
        }
        
      }
      
      useEffect(()=>{
        fetchData('car');
    
      },[]);
  
      return {gif,loading,fetchData};
   
    
}
