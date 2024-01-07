import React from "react"
import styles from "./ProjectCard.module.css"
import { getimageUrl } from "../utils";

export const ProjectCard = ({project : {title, description, imageSrc, skills, demo, code}}) => {
    return <div className={styles.container}>
    <img src={getimageUrl(imageSrc)} alt={`image of ${title}`} className={styles.image}></img>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <ul className={styles.skills}>
        {
            skills.map((skills, id)=> {
              return  (<li key={id} className={styles.skill}>{skills}</li>)
            })
        }
    </ul>
    <div className={styles.links}>
     <a href={demo} className={styles.link}>Demo</a>
     <a href={code}className={styles.link}>Code</a>   
    </div>
    </div>
}