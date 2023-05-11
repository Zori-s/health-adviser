import axios from "axios";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { UserContext, useAuth } from "./components/userContext";

/*export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email,
      password
    }
    console.log(data);

    axios
      .post("/api/login", { email, password })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="text"
          value={email}
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          id="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}*/

export default function Login() {
 // const { setUser} = useContext(UserContext);
  const route = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useAuth()

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email,
      password
    }
    console.log(data);

    axios
      .post("/api/login", { email, password })
      .then((response) => {
        if(response.status === 200){
        console.log(response);
        setUser(response.data.user)
        route.push("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-screen h-screen flex">
      <img src="Doctor.png" className="w-[calc(60%)] h-full object-cover hidden md:block" />
     <div  className="w-full  md:w-[calc(40%)] bg-[#8AAEB1] flex flex-col ">
     <button onClick={(event) => route.push("/signup")} className=" text-blue-900 font-bold justify-end">Бүртгэл үүсгэх</button>
        <form onSubmit={handleSubmit} className="max-w-[320px] w-full p-0 mt-2 mx-auto">
          <div>
            
            </div>
            <div className="mt-40">
              <h4 className="text-1.5xl text-white font-normal" >Тавтай морил</h4>
              <h2 className="text-4xl text-white font-sans ">Та нэвтэрч орно уу</h2>
              <div>
                <input 
                id="email" value={email} 
                onChange={(event) => setEmail(event.target.value)} 
                className="w-full bg-gray-200 mt-2 p-1 focus: border-gray-400 focus:bg-white focus:outline-none" 
                type="text" 
                placeholder="Нэвтрэх нэр" />
              </div>
              <div>
                <input 
                id="password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)} 
                className="w-full bg-gray-200 mt-2 p-1 focus: border-gray-400 focus:bg-white focus:outline-none" 
                type="password" 
                placeholder="Нууц үг" />
              </div>

              <div>
                <button type="submit" className="w-full my-5 py-2 text-white bg-[#303E53]">Нэвтрэх</button>
              </div>
            </div>
        </form>
      
     </div>
    </div>
  );
}
