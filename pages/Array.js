import React, { useState } from 'react'
import styles from '../styles/Array.module.css'
import Navbar from '../components/navbar';
const array = [];

function Cell(props) {
  const value = props.value;
  return (
    <div className={styles.Cell}>
      {value}
    </div>
  );
}

function Array(props) {
  const size = props.size;
  array.length = 0;
  for (let i = 0; i < size; i++) {
    array[i] = <Cell value={Math.floor(Math.random() * 50)} />;
  }

  return (
    <div>
      {array}
    </div>
  );
}

function Form() {

  const [size, setSize] = useState('');
  const [isSubmitted, setTrue] = useState(false);
  const [operation, setOperation] = useState("c");
  const operations = [
    {
      label: "Insert",
      value: "insert",
    },
    {
      label: "Delete",
      value: "delete",
    },
    {
      label: "Search",
      value: "search",
    }
  ];

  console.log(size);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setSize(e.target.value);
    setTrue(false);
    return {
      size,
    }
  }

  return{
    size, 
    isSubmitted,
    renderForm:(
      <form className={styles.Form} onSubmit={handleSubmit}>
        <label className={styles.Label}>Array Size:</label>
        <input 
        type="text"
        required
        value={size}
        onChange={handleChange}
        />
        <button onClick={(e) => setTrue(true)}>Set</button>
        <label className={styles.Label}>Choose an operation: </label>
        <select>
          {operations.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </form>
    )
  }
}

function ArrayDS() {

  const {array, size, isSubmitted, renderForm} = Form();

  return (
    <div className={styles.ArrayPage}>
        <Navbar />
        {renderForm}
        <div className={styles.Array}>
          {isSubmitted && <Array size={size} />}
        </div>
      </div>
  );
}

 
export default ArrayDS;





