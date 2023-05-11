import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

import { AiFillEye } from 'react-icons/ai';

function News({title,author,date,likes,views}) {
  return (
    <div style={{width:1010,height:200,flexDirection:'row',justifyContent:'space-between',display:'flex',borderWidth:1,borderColor:'black'}}>
        
        <img src='post1.png'  style={{height:200,width:240, padding: 10, }}/>
        <div style={{flexDirection:'row',justifyContent:'space-evenly',paddingLeft:10, marginTop:50}}>
        <p style={{fontSize:22,fontWeight:800}}>{title}</p>
        <div style={{display:'flex',justifyContent:'row'}}>
           
            <span style={{color:'gray', paddingLeft: 10}}>{author}</span>
            
            <div  style={{flexDirection:'row',justifyContent:'space-evenly',paddingLeft:17,paddingTop:15,display:'flex',marginLeft:200}}>
            <AiOutlineHeart />
            <p>{likes}</p>
            <div style={{flexDirection:'row',justifyContent:'space-evenly',paddingLeft:30,display:'flex'}}>
            <AiFillEye/>
        <p>{views}</p>
            </div>
        </div>  
        </div>
        <p style={{color:'purple',fontSize:14}}>{date}</p>
    </div>
           </div>
  )
}

export default News
