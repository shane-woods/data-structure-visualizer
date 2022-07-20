import React from 'react';
import Head from 'next/head'
import arrayIMG from '../public/images/array.png'
import linkedlistIMG from '../public/images/linkedlist.png'
import bstIMG from '../public/images/bst.png'
import PageLink from '../components/PageLink'
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css'


const Home = () => {
  return ( 
    <div className={styles.Home}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
      <h1 className={styles.Title}>Data Structure & Algorithm Visualizer</h1>
      <div className={styles.Table}>
        <PageLink link="array" image={arrayIMG} ds="Array" />
        <PageLink link="linked" image={linkedlistIMG} ds="Linked List" />
        <PageLink link="bst" image={bstIMG} ds="Binary Search Tree" />
      </div>
      </div>
   );
}

export default Home;



