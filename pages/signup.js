import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CoreLayout from "./layout/CoreLayout";

export default function Login() {
    const route = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [types, setTypes] = useState("");

    const [speciality, setSpeciality] = useState("");
    const [start_job_date, setSJD] = useState("");
    const [education, setEducation] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(start_job_date);
      console.log(speciality);
      console.log(education);
      console.log(description);
        
    if(types == 0 || gender == 0){alert("Empty value: Check information.")}
    else{
        if(types == 1){
            axios
            .post("/api/userSignup", { email, password, lname, fname, phone_number, gender, age, types })
            .then((response) => {
              console.log(response);
              route.push("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        if(types == 2){
            axios
            .post("/api/doctorSignup", { email, password, lname, fname, phone_number, gender, age, types, speciality, start_job_date, education, description })
            .then((response) => {
              console.log(response);
              route.push("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        
      
    } 
    };

    return (
      <>
      
        <div>
          <form onSubmit={handleSubmit}>
          <input
              id="lname"
              type="text"
              value={lname}
              placeholder="Last name"
              onChange={(event) => setLname(event.target.value)}
            />
            <input
              id="fname"
              type="text"
              value={fname}
              placeholder="First name"
              onChange={(event) => setFname(event.target.value)}
            />
            <input
              id="email"
              type="email"
              value={email}
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              id="phone_number"
              type="text"
              value={phone_number}
              placeholder="Phone number"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <select onChange={(e) =>{
                setGender(e.target.value)

            }} id="gender">
              <option value={0}>gender</option>
              <option value={1}>man</option>
              <option value={2}>woman</option>
            </select>
            <input
              id="age"
              type="text"
              value={age}
              placeholder="Age"
              onChange={(event) => setAge(event.target.value)}
            />
            <select onChange={(e) =>{
                setTypes(e.target.value)
            }} id="types">
              <option value={0}>choose side</option>
              <option value={1}>user</option>
              <option value={2}>doctor</option>
            </select>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">login</button>
            <div>
              <select onChange={(e) =>{
                    setSpeciality(e.target.value)
                }} id="speciality">
                <option value={0}>hodood</option>
                <option value={1}>zurh</option>
                <option value={2}>nud</option>
              </select> 
            </div>
            <input 
            id="start_job_date" 
            type="date" 
            name="start_job_date" 
            min="1983-01" 
            value={start_job_date}
            onChange={(event) => setSJD(event.target.value)}
            />
            <textarea rows="5" cols="40"
              id="education"
              type="text"
              placeholder="Education."
              value={education}
              onChange={(event) => setEducation(event.target.value)} 
            />
            <textarea rows="5" cols="40"
              id="description"
              type="text"
              placeholder="About your self.."
              value={description}
              onChange={(event) => setDescription(event.target.value)} 
            />
          </form>
        </div>
      </>

      );

}  