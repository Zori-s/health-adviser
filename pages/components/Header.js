import React from 'react'
import Link from 'next/link';
 
function Header() {
  return (
    <div style={{height:'5%',width:'100%',position:'fixed',top:0,backgroundColor:'#f4f4f4',transition:'ease',overflow:'hidden',display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
         <Link href="/home">Home</Link>
         <Link href="/sos">Анхны тусламж</Link>
         <Link href="/about">Тухай</Link>
    </div>
  )
}

export default Header
