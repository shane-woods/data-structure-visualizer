import React from 'react';
import Head from 'next/head'
import arrayIMG from '../public/images/array.png'
import linkedlistIMG from '../public/images/linkedlist.png'
import bstIMG from '../public/images/bst.png'
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css'
import DSlink from '../components/dslink';


const Home = () => {
  return ( 
    <div className={styles.Home}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
      <div className={styles.Box}>
        <div className={styles.Table}>
          <DSlink link="array" image={arrayIMG} ds="Array" />
          <DSlink link="linked" image={linkedlistIMG} ds="Linked List" />
          <DSlink link="bst" image={bstIMG} ds="Binary Search Tree" />
        </div>
      </div>
    </div>
   );
}

export default Home;



