import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

import { AiFillEye } from 'react-icons/ai';

function NewSmall({title,author,date,likes,views}) {
  return (
    <div onClick={()=>undefined} style={{width:300,height:200,flexDirection:'row',justifyContent:'space-between',display:'grid',borderWidth:1,borderColor:'black'}}>
         <p style={{fontSize:14,fontWeight:400,color:'gray',paddingLeft:10  }}>{date}</p>  
         <p style={{fontSize:14,fontWeight:600,paddingLeft:10}}>{title}</p>  
        <img src='Doctor.png'  style={{height:100,width:300}}/>
        <div style={{display:'flex',flexDirection:'row',paddingLeft:20}}>
        {/* <span style={{color:'gray'}}>{author}</span>
         */}
        <AiOutlineHeart />
        <p>{likes}</p>
        <div  style={{display:'flex',flexDirection:'row',paddingLeft:100}}>
        <AiFillEye/>
        <p>{views}</p>
        </div>
    </div>
           </div>
  )
}

export default NewSmall
