import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ReactComponent as CaretIcon } from '../public/icons/caret.svg'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
      <nav className={styles.Navbar}>
        <ul>
          <Navitem icon={CaretIcon} path="projects"/>
          <Navitem icon="About" path="about"/>
          <Navitem icon="Contact" path="contact"/>
        </ul>
      </nav>
    );
}

function Navitem(props) {
  const path = props.path;
  return (
    <li>
      <Link href={'/' + path}>
        <a className={styles.icon}>
          {props.icon}
        </a>
      </Link>
    </li>
  );
}


 
export default Navbar;