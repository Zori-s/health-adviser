import React, { useEffect, useState } from "react";
import CoreLayout from "./layout/CoreLayout";
import axios from "axios";
import { useAuth } from "./components/userContext";


const ChatPage = () => {
  const {user} = useAuth()
  console.log("auth",user);
  const [doctor,setDoctor] = useState([])
  const [to_user_id,setChatting] = useState('')
  const [chats,setChats] = useState([])
  const [fromchat,setFromchat] = useState([])
  const [from_user_id,setfrom_user_id] = useState('')
  const [message,setMessage] = useState('')
  const message_date = Date.now()
  const currentDate = new Date();
  const [sendCount, setSendCount] = useState(0);
const formattedDate = currentDate.toISOString().split('T')[0];

  const userChatting = (e)=>{
    setSendCount(sendCount + 1)
    e.preventDefault();
  axios
  .post("/api/postChating",{from_user_id: user.email,
  to_user_id: to_user_id,
  message: message,
  message_date:formattedDate})
  .then((response) => {
    if(response.status === 200){
      const [sendCount, setSendCount] = useState(0);
    console.log('chatting',response);
    }
  })
  .catch((error) => {
    console.log('error',error);
  });
  }
  const getdoctor = async() => {
    // axios.get("/api/getDoctor")
    //   .then((response) => {
    //     if(response.status === 200){
    //       console.log('doctor',response.data.users);
    //       setDoctor(response.data.users)
    //       console.log('user',response.data.users)
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    axios.post("/api/postChatedUser", {from_user_id: user.email})
      .then((response) => {
        if(response.status === 200){
          console.log('doctor',response.data.users);
          setDoctor(response.data.users)
          console.log('user',response.data.users)
          }
          })
          .catch((error) => {
            console.log(error);
            });
         
  }
  const getChats = async() => {
    axios.post("/api/postGetChat",{to_user_id:to_user_id, from_user_id: user.email})
      .then((response) => {
        if(response.status === 200){
          console.log('chatsd',response.data.users);
          setChats(response.data.users)
          console.log('user',response.data.users)
        }
      })
      .catch((error) => {
        console.log(error);
      });
      // axios.post("/api/postGetChat",{to_user_id:from_user_id, from_user_id:to_user_id})
      // .then((response) => {
      //   if(response.status === 200){
      //     console.log('chatsd',response.data.users);
      //     setFromchat(response.data.users)
      //     console.log('user',response.data.users)
      //   }
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  }
  
  useEffect(() => {
    getdoctor()
  }, []);
    useEffect(()=>{
      getChats();
      console.log('asdf',message,to_user_id,user.email,formattedDate)
    },[to_user_id,sendCount])
  return (
    <CoreLayout>
        
    <div className="ml-64 mt-8 flex flex-col w-4/5 h-screen">
      
      {/* Header */}
      <header className="bg-gray-800 text-white px-4 py-2 w-screen">
        <h1 className="text-xl font-bold">Chat </h1>
      </header>
     
      <div>
      
    </div>
      {/* Chat messages */}
      <div style={{flex:1,display: 'flex',flexdirection: 'row'}}>
        <div style={{flex:1,borderLeft:1,borderWidth:1,borderTopColor:'black'}}>
      {doctor.map(item => (
        <div class="profile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10}} >
          {/* <div class="name" style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>{item.fname}</div>
          <div class="email" style={{ fontSize: 18, marginBottom: 10 }}>{item.email}</div>
          <div class="education" style={{ fontSize: 16, color: '#666' }}>{item.education}</div> */}
          <div class="email" style={{ fontSize: 18, marginBottom: 10 }}>{item.email}</div>
          <button onClick={() =>setChatting(prevState => prevState === item.email ? prevState : item.email)}>Чатлах</button>
        </div>
      ))}
      </div>
      <div className="flex-grow overflow-y-auto px-4 py-2">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full w-8 h-8"
            />
            <div>
              <span className="font-bold">{to_user_id}</span>
              <span className="text-sm text-gray-500">
                2 minutes ago
              </span>
            </div>
          </div>
          {chats.map((item, index) => (
        <div key={item.ID} className="chat-message" style={{ display: 'flex', flexDirection: 'column', alignItems: item.FROM_USER === to_user_id ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
          {/* {item.FROM_USER !== to_user_id && <p className="chat-message-user">{item.FROM_USER}</p>} */}
          <p className="chat-message-text" style={{ backgroundColor: item.FROM_USER === to_user_id ? '#34B7F1' : 'gray', color: 'white', padding: 10, borderRadius: 10, maxWidth: '80%' }}>{item.MESSAGE}</p>
        </div>
      ))}
          {/* {chats.map((item, index) => (
    <div key={index} className="chat-message" style={{display:'flex',flexDirection:'column',width:200,justifyContent:'flex-end'}}>
      <p className="chat-message-text" style={{backgroundColor:'gray',padding:10,borderRadius:10}}>{item.MESSAGE}</p>
    </div>
  ))} */}
   <div className="chat-container" style={{ display: 'flex', flexDirection: 'column-reverse' ,width:200,justifyContent:'flex-end',alignSelf:'flex-end'}}>
  {/* {fromchat.map((item, index) => (
    <div key={index} className="chat-message" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <p className="chat-message-text" style={{ backgroundColor: '#34B7F1', padding: 10, borderRadius: 10 }}>{item.MESSAGE}</p>
    </div>
  ))} */}
</div>

        </div>
     
      {/* Input form */}
      <form className="bg-gray-200 px-4 py-2" style={{position:'fixed',bottom:0,width:600}}>
        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-grow border-gray-400 border-2 rounded-lg px-2 py-1"
            placeholder="Type a message..."
            onChange={(e)=>setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={(e) => userChatting(e)}
          >
            Send
          </button>
        </div>
      </form>
      </div>
      </div>
    </div>
    </CoreLayout>
  );
};

export default ChatPage;
