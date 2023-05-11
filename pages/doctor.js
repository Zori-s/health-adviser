import React, { useEffect, useState } from 'react'
import DoctorSmall from './components/DoctorSmall'
import CoreLayout from './layout/CoreLayout'
import axios from 'axios';
function doctor() {
  const [search_doctor, setSearchDoc] = useState("");
  const [search_speciality, setSearchSpe] = useState("");
  const [posts, setPosts] = useState([]);

  const [searchedData, setSearchdata] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const {data: res} = axios.get("/api/getDoctor").then(
        response=>{
          if(response.status === 200){
            // console.log('asdf',response.data.users)
            setPosts(response.data.users)
          }
         
        }
      );
      
    };
    getPosts();
  },[]);
  
  const searchSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/postDoctor", {search_doctor, search_speciality})
      .then((response) => {
        // console.log(response.data);
        setPosts(response.data.users)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  console.log(posts);

  // const searchSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("/api/postDoctor", {search_doctor, search_speciality})
  //     .then((response) => {
  //       console.log(response.data);
  //       setPosts(response.data.users)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
      
    
  // }

  // useEffect(() =>{
  //   axios
  //     .post("/api/postDoctor", {search_doctor, search_speciality})
  //     .then((response) => {
  //       console.log(response.data);
  //       setPosts(response.data.users)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
      
  // },[search_speciality])


  return(
  <CoreLayout>
    <form >
    <div className='content' style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
    
    <div style={{marginTop:60,alignSelf:'center',marginLeft:500}}>

      <input 
        id='search_doctor'
        type='text'
        value={search_doctor}
        placeholder='Хайх эмчийг нэрээр оруулна уу.'
        onChange={(event) => setSearchDoc(event.target.value)}
      />

      <div>
        <select onChange={(e) =>{
              setSearchSpe(e.target.value)
          }} id="search_speciality">
          <option value={0}>Төрөл</option>
          <option value={1}>Нүд</option>  
          <option value={2}>Арьс</option>
        </select> 
      </div>
      <button type='button' onClick={(e)=>{searchSubmit(e)}}>Хайх</button>
   
      
      {/* {posts.map(item => 
      <div style={{float:'left',paddingTop:10,boxSizing:'border-box',width: '100%'}} key={item.id}>
   <DoctorSmall fname={item.fname} lname={item.lname} speciality={item.speciality} start_job_date={item.start_job_date} hospital={item.hospital}/>
   </div>)
      } */}

{ posts?.length > 0 ? posts.map((item, index) => 
  <div style={{float:'left',paddingTop:10,boxSizing:'border-box',width: '100%'}} key={index} >
    {
      JSON.stringify(item)
    }
    <DoctorSmall fname={item.fname} lname={item.lname} speciality={item.speciality} start_job_date={item.start_job_date} hospital={item.hospital}/>
  </div>) : <div>1</div> 
}


      </div>
      </div>
      </form>
  
  </CoreLayout>
  )
}

export default doctor
