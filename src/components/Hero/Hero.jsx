import React from "react"

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Salut, Je suis Mohamed-lamin</h1>
        <p className={styles.description}>
          Je suis developpeur de Micrososft Power Platform & SharePoint, mon
          experience s'étend à ASP.NET Core & <br /> Microsoft SQL server ainsi
          que NextJS.
        </p>
        <a
          href="https://outlook.office365.com/book/Clientdiscussion@mltaleb.com/"
          target="_blank"
          className={styles.contactBtn}
        >
          Prenez un rendez-vous
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
