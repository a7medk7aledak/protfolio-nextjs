"use client";
import Link from "next/link";
import Styles from "./Navbar.module.css";
import { links } from "./data";

import { Montserrat } from "next/font/google";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
const logoFont = Montserrat({ subsets: ["latin"] });
function Navbar() {
  return (
    <div className={Styles.container}>
      <Link href="/" className ={`${Styles.loge} ${logoFont.className}`}>ِAHMED_AK</Link>
      <div className={Styles.links}>
        <DarkModeToggle/>
        {links.map(link=>
           <Link key={link.id} href={link.url} className={link.title}>{link.title}</Link>
        )}
       <button className={Styles.b} onClick={()=> {console.log("I am atomic")}}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar