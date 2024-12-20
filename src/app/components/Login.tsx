"use client";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import style from "../page.module.css";


const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const router = useRouter();

  // console.log(username, "username");


  const handleLogin = () => {
    const storedUserData = localStorage.getItem("userData");  //Retrieve Data from Local Storage:
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
    // Check if the entered username and password match the stored data


    if (
      parsedUserData &&
      username === parsedUserData.userName &&
      password === parsedUserData.password
    ) {
      console.log("Login Success");
      alert("Login Success");
      router.push("/Dashbord");
    } else {
      // console.log("Login Failed");
      alert("Login Failed!!  Incorrect Username and Password");
      alert("New User SignUp First")
      setUsername("")
      setPassword("")
    }
  };
  return (
    <>
      <h2 className={style.text}>Login Page</h2>
      
      <br />
      <div>
      <input
        className={style.inputfield}
        type="text"
        placeholder="Enter Username"
        value={username} required
        onChange={(e) => setUsername(e.target.value)}
        />{" "}
      </div>
      <br />
      <div>
      <input
        className={style.inputfield}
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      </div>
      <br />
      <br />
      <button className={style.loginbutton} onClick={handleLogin}>
        Login
      </button>
      <br />
      <br />
      <button
        className={style.loginbutton}
        onClick={() => router.push("/SignUp")}
      >
        SignUp
      </button>
    </>
  );
};


export default Login;
