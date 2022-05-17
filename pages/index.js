import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import arrayIMG from '../public/images/array.png'
import linkedlistIMG from '../public/images/linkedlist.png'
import bstIMG from '../public/images/bst.png'
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css'


const Home = () => {
  return ( 
    <div className={styles.Home}>
      <Navbar />
      <div className={styles.Homepage}>
        <h1>Data Structure & Algorithm Visualizer</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <Link href="/array">
                  <a> 
                    <div className={styles.dsIMG}>
                      <Image src={arrayIMG} alt="Image of an Array"/>
                    </div>
                  </a>
                </Link>
                <p className={styles.IMGcap}>Array</p>
              </td>
              <td>
                <Link href="#">
                  <a>
                    <div className={styles.dsIMG}>
                      <Image src={linkedlistIMG} alt="Image of a Linked List"/>
                    </div>
                  </a>
                </Link>
                <p className={styles.IMGcap}>Linked List</p>
              </td>
              <td>
                <Link href="#">
                  <a>
                    <div className={styles.dsIMG}>
                      <Image src={bstIMG} alt="Image of a Binary Search Tree"/>
                    </div>
                  </a>
                </Link>
                <p className={styles.IMGcap}>Binary Search Tree</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   );
}

export default Home;



