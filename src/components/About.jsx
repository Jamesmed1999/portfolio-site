import React  from "react";
import styles from "./About.module.css"
import { getimageUrl } from "../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img src={getimageUrl("about/ab1.png")} 
            alt="full body pic of me"
            className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img src={getimageUrl("about/ab-icon1.png")} 
                alt="pointer icon"/>
                <div className={styles.aboutItemText}>
                 <h3>Front end developer</h3>
                 <p>I'm a front end developer who dislikes designing things but I do like fallout new vegas</p>
                 </div>
                </li>
                <li className={styles.aboutItem}>
                <img src={getimageUrl("about/ab-icon1.png")} 
                alt="pointer icon"/>
                <div className={styles.aboutItemText}>
                 <h3>Fighting game fan</h3>
                 <p>I play a number of fighting games my favorites are Melty blood, the king of fighters and Granblu fantasy versus rising</p>
                 </div>
                </li>
                <li className={styles.aboutItem}>
                <img src={getimageUrl("about/ab-icon1.png")} 
                alt="pointer icon"/>
                <div className={styles.aboutItemText}>
                 <h3>youtuber</h3>
                 <p>I am a youtuber who spends too much time worrying about videos that not many people will watch</p>
                 </div>
                </li>
            </ul>
        </div>
        </section>
}