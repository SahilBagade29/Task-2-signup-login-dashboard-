"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "../page.module.css";

const SignUp: React.FC = () => {
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleSignUp = () => {
    const userData = { userName, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup Successful");
    router.push("/");
  };


  if (userName || password === ""){ 
    debugger
    console.log('Please enter both username and password.' )
  }

  return (
    <>
      <h2 className={style.text}>SignUp Page</h2>
      <br />
       <input
        className={style.inputfield}
        type="text"
        placeholder="Enter User Name" required
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br />
      <input
        className={style.inputfield}
        type="password"
        placeholder="Enter Password" required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <button className={style.signupbutton} onClick={() => handleSignUp()}>
        {" "}
        Submit{" "}
      </button>
    </>
  );
};

export default SignUp;
