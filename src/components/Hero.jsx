import React  from "react";
import styles from "./Hero.module.css"
import { getimageUrl } from "../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>HI I'm James</h1>
            <p className={styles.description}>I'm a full stack dev with 
            stuff and things using react and node</p>
            <a href="mailto" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getimageUrl("2022_ani_cartoon_27.png")} alt="hero me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}