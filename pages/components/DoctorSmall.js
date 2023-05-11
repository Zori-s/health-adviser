import React from 'react'

function DoctorSmall({fname, lname, speciality, start_job_date, hospital}) {
  return (
    <div className="w-2/3 h-auto flex flex-row border-solid border-2">
      
     <img src='doctorIcon.png'  style={{height:100,width:100}}/>
      <div className="flex  flex-col">
        

          <div /*style={{flexDirection:'row',justifyContent:'space-evenly',paddingLeft:10}}*/>
          <p className="font-bold text-lg" style={{fontSize:18,fontWeight:800}}>{lname + " " +fname}</p>
          <div style={{display:'flex',justifyContent:'row'}}>
            
              <span style={{color:'gray'}}>{speciality}</span>
              <div  style={{flexDirection:'row',justifyContent:'space-evenly',paddingLeft:10,display:'flex',marginLeft:200}}>
              </div>
          </div>  
          </div>
          <p style={{color:'purple',}}>{start_job_date}</p>
          <p style={{color:'purple',}}>{hospital}</p>
        </div>
    </div>
  )
}

export default DoctorSmall
