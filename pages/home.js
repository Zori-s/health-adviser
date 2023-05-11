import React, { useState, useEffect } from 'react'
import News from './components/News'
import NewSmall from './components/NewsSmall'
import CoreLayout from './layout/CoreLayout'
import axios from 'axios'
function home() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [likes, setLike] = useState("");
  const [views, setViems] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      axios.get("/api/getNews").then(
        response=>{
          if(response.status === 200){
            console.log('asdf',response.data.users)
            setNews(response.data.users)
          }
         
        }
      );
      
    };
    getNews();
  },[]);

     return (
    <CoreLayout>
    <div className='content' style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
    
   
      <div style={{marginTop:60,alignSelf:'center',marginLeft:300}}>
      <News title={'Лабораторийн шинжилгээ хийлгэснээр өвчнөөс урьдчилан сэргийлэх боломж'} author={'batzorig'} date={'2023-04-23'} likes={'4'} views={'999'}/>
      {news.map(item=>{
        <>
         {<p>{item.title}</p>}
        </>
      })}
      {news.map(item => 
      <div style={{float:'left',paddingTop:10,boxSizing:'border-box',width: '33.33%'}} key={item.id}>
   <NewSmall title={item.header} date={item.post_date} likes={item.likes} views={item.views}/>
   </div>)
      }
      </div>
    </div>
    </CoreLayout>
  )
}

export default home
