import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <a href="/">Data Structure Visualizer</a>
      </div>
    </nav>
  )
}

 
export default Navbar;