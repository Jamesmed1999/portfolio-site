import React from "react"
import styles from "./Footer.module.css"
import { getimageUrl } from "../utils";

export const Footer = () => {
    return (
        <footer id="footer" className={styles.container}>
            <div className={styles.text}>
                <h2 >Contact me</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getimageUrl("nav/ham.png")}alt="email"></img>
                     <a href="">jamesm123@gmail.com</a>   
                </li>
            </ul>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getimageUrl("nav/ham.png")}alt="github"></img>
                     <a href="https://github.com/Jamesmed1999">Github</a>   
                </li>
                </ul>
            <ul className={styles.links}> 
                <li className={styles.link}>
                    <img src={getimageUrl("nav/ham.png")}alt="email"></img>
                     <a href="www.linkedin.com/in/jamesjmedina">linkedin/jamesjmedina</a>   
                </li>
            </ul>

        </footer>
    )
}