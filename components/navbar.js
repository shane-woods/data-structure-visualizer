import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={styles.Navbar}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap" rel="stylesheet"/>
      </head>
        <ul>
          <Navitem label="Projects" path="projects"/>
          <Navitem label="About" path="about"/>
          <Navitem label="Contact" path="contact"/>
        </ul>
      </nav>
    );
}

const Navitem = (props) => {
  const path = props.path;
  return (
    <li className={styles.label}>
      <Link href={'/' + path}>
        <a className={styles.navLink}>
          {props.label}
        </a>
      </Link>
    </li>
  );
}


 
export default Navbar;