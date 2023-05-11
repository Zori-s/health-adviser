import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../components/userContext";
import { useState, useEffect } from "react";

export default function CoreLayout({ children }) {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
      setLname(user.lname);
      setFname(user.fname);
    }
  }, [user]);

  return (
    <>
      <Header />
      <Sidebar lastname={lname} firstname={fname} email={email} />
      <div>{children}</div>
    </>
  );
}
