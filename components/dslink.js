import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/DSlink.module.css'

const DSlink = (props) => {
  return (
    <div className={styles.link}>
      <Link href={"/" + props.link}>
        <a> 
          <div className={styles.dsIMG}>
            <Image src={props.image} alt={"Image of a " + props.ds}/>
          </div>
        </a>
      </Link>
      <p className={styles.IMGcap}>{props.ds}</p>
    </div>
  )
}

 
export default DSlink;