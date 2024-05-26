import React from "react"

import styles from "./About.module.css"
import { getImageUrl } from "../../utils"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>A propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Developpeur Power Platform</h3>
              <p>
                Je developpe des solutions de Microsoft Power Platform qui
                incarnent le processus metier du client.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Developpeur SharePoint</h3>
              <p>Une grande experience de development de SharePoint Online.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Developpeur FullStack</h3>
              <p>
                J'ai Deveoppé plusieurs Responives UI avec des excellentes UX
                ainsi que des systems de backend et APIs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
