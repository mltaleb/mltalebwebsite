import React, { useState } from "react"

import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        MLTALEB
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li></li>
          <a href="#about">À props</a>
          <li>
            <a href="#experience">Expérience</a>
          </li>
          <li>
            <a href="https://mltaleb.blogspot.com/" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
