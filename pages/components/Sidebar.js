import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillWechat} from 'react-icons/ai'
import { useRouter } from 'next/router'

function Sidebar({lastname,firstname,email}) {
  const route = useRouter();

  return (
    <div style={{justifyContent:'space-even',height:'100%',width:'20%',position:'fixed',zIndex:1,top:0,left:0,backgroundColor:'#f4f4f4',transition:'ease',overflow:'hidden',paddingTop:20,display:'flex',flexDirection:'column',alignItems:'center'}}>
        <img src='Doctor.png' style={{borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       backgroundColor:'#fff',
       borderRadius:50,marginTop:50}}/>
        <span>{lastname}</span>
        <p style={{fontSize:18,fontWeight:800}}>{firstname}</p>
        <p>{email}</p>
        <div style={{flexDirection:'column',display:'flex',marginTop:40,justifyContent:'space-even'}}>
      <button  style={{flexDirection:'row',display:'flex',marginTop:40,justifyContent:'space-evenly',backgroundColor:'white',borderRadius:20,height:40,width:120,alignItems:'center'}} title='Гарах' onClick={(e) => {route.push("/doctor")}}> <AiOutlineSearch size={30}/>Эмч хайх</button>
       
      <button  style={{flexDirection:'row',display:'flex',marginTop:40,justifyContent:'space-evenly',backgroundColor:'white',borderRadius:20,height:40,width:120,alignItems:'center'}} title='Гарах'onClick={(e) => {route.push("/chat")} }> <AiFillWechat size={30}/>Чат</button>
        </div>
        <button  style={{backgroundColor:'#FF9696',height:40,width:100,borderRadius:20,position:'absolute',bottom:30}} title='Гарах'>Гарах</button>
    </div>
  )
}

export default Sidebar
