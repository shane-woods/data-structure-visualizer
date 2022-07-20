import React, { useState, useEffect, useCallback} from 'react'
import styles from '../styles/Array.module.css'
import Navbar from '../components/navbar';

const Cell = (props) => {

  const value = props.value;
  return (
    <div className={styles.Cell}>
      {value}
    </div>
  );
}

const Arr = (props) => {
  const operation = props.operation;
  const size = props.size;
  const array = [];
  for (let i = 0; i < size; i++) {
    array[i] = <Cell value={Math.floor(Math.random() * 50)} />;
  }
  return (
    <div className={styles.Arr}>
      {array}
    </div>
  );
}

 const Label = (props) => {
  return (
    <label className={styles.Label}>
      {props.label}
    </label>
  )
}

const Form = () => {
  const [size, setSize] = useState(5);
  const [isSubmitted, showArray] = useState();
  const [operation, setOperation] = useState();
  const operations = [
    {operation: 'Search', selected: 'false', id: 0},
    {operation: 'Insert', selected: 'false', id: 1},
    {operation: 'Delete', selected: 'false', id: 2}
  ];
  const array = [];

  useEffect(() =>  {
    showArray(true);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    setSize(e.target.value);
    showArray(false);
  }

  const setOp = (e) => {
    setOperation(e.target.value);
  }


  return (
    <div>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <Label label="Array size: " />
        <input 
        type="text"
        required
        value={size}
        onChange={handleChange}
        className={styles.sizeInput}
        /> 
        <Label label="Choose an operation:" />
        <select onChange={setOp}>
          {operations.map((option) => (
            <option value={option.operation}>{option.operation}</option>
          ))}
        </select>
        {operation === "Search" ? <Label label="SEARCH" /> : <Label label="NOT SEARCH"/>}
        <button className={styles.Button} onClick={(e) => showArray(true)}>Visualize!</button>
      </form>
      {isSubmitted ? (<Arr size={size} operation={operation}/>) : (<Arr size={0} operation=''/>)}
    </div>
  );
}

  const ArrayDS = () => {
    
  return (
    <div className={styles.ArrayPage}>
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap" rel="stylesheet"/>
      </head>
      <Navbar />
      <Form />
    </div>
  );
}

 
export default ArrayDS;




