"use client"
import { useRouter } from 'next/navigation';
import style from "../page.module.css";

const DashBord = () => {
  const router = useRouter()
  return (
    <>
     <h2 className={style.text}>You have Sucessfully Login To dashBord</h2>
      <button className={style.signupbutton} onClick={() =>router.push('/')}>LogOut</button>
    </>
  )
}

export default DashBord;
