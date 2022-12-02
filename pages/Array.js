import React, { useState, useEffect, useCallback} from 'react'
import styles from '../styles/Array.module.css'
import Navbar from '../components/navbar';

let array = [];

const Cell = (props) => {
  let value = props.value;
  let id = props.id;
  return (
    <div className={styles.cell} key={id}>
      {value}
    </div>
  );
}

const Arr = (props) => {
  let size = props.size;
  array = Array.from({length:size}, () => 1);
  return (
    <div className={styles.array} key="array">
      {
        array.map((_,i) => <Cell value={Math.floor(Math.random() * 50)} id={i}/>)
      }
    </div>
  );
}

const Form = () => {
  const [size, setSize] = useState(5);
  const [isSubmitted, showArray] = useState(false);

  useEffect(() =>  {
    showArray(true);
  }, [])

  return (
    <div className={styles.ArrayPage}>
      {isSubmitted ? <Arr size={size}/> : <Arr size={0}/>}
    </div>
  );
}

const ArrayDS = () => {
  return (
    <div className={styles.ArrayPage}>
      <Navbar />
      <Form />
    </div>
  );
}

 
export default ArrayDS;




