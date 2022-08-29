import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const PageLink = (props) => {
  const link = props.link;
  const image = props.image;
  const dataStructure = props.ds;
  return (
    <div className={styles.PageLink}>
      <Link href={"/" + link}>
        <a> 
          <div className={styles.dsIMG}>
            <Image src={image} alt={"Image of a " + dataStructure}/>
          </div>
        </a>
      </Link>
      <p className={styles.IMGcap}>{dataStructure}</p>
    </div>
  )

}

export default PageLink;