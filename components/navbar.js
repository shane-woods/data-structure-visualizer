import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ReactComponent as CaretIcon } from '../public/icons/caret.svg'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={styles.Navbar}>
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