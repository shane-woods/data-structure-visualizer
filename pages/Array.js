import React, { useState, useEffect, useCallback} from 'react'
import styles from '../styles/Array.module.css'
import Navbar from '../components/navbar';

function Cell(props) {
  const value = props.value;
  return (
    <div className={styles.Cell}>
      {value}
    </div>
  );
}

function Arr(props) {
  const size = props.size;
  const rand = Array(size).fill().map(() => Math.floor(Math.random() * 50));
  console.log(rand);
  const array = rand.map((value) => <Cell value={value} />);
  return (
    <div className={styles.Array}>
      {array}
    </div>
  );
}

function SelectOperation() {
  const [operation, setOperation] = useState();
  const operations = [
    {
      label: "Search",
      value: "search",
    },
    {
      label: "Insert",
      value: "insert",
    },
    {
      label: "Delete",
      value: "delete",
    },
  ];

   function setOp(e) {
        e.preventDefault();
        setOperation(e.target.value);
   }


  return {
    operation,
    renderSelect:
    <select onChange={setOp}>
        {operations.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
    </select>
  }
  
}

function Label(props) {
  return (
    <label className={styles.Label}>
      {props.label}
    </label>
  )
}

function Form() {
  const [size, setSize] = useState(5);
  const [isSubmitted, showArray] = useState();
  const {operation, renderSelect} = SelectOperation();

  useEffect(() =>  {
    showArray(true);
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setSize(e.target.value);
    showArray(false);
  }

  return {
    size, 
    isSubmitted,
    operation,
    renderForm:(
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
        {renderSelect}
        <button className={styles.Button} onClick={(e) => showArray(true)}>Visualize!</button>
      </form>
    )
  }
}

function ArrayDS() {
  const {size, isSubmitted, operation, renderForm} = Form();
  console.log(operation);
  return (
    <div className={styles.ArrayPage}>
        <Navbar />
        {renderForm}
        <div className={styles.Array}>
          {isSubmitted && 
          <Arr size={size} />}
        </div>
      </div>
  );
}

 
export default ArrayDS;




