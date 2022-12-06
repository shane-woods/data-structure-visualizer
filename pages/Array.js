import React, { useState, useEffect, useCallback} from 'react'
import styles from '../styles/Array.module.css'
import Navbar from '../components/navbar';
import Head from 'next/head'

let initialArray = [
  {value:1,},
  {value:2},
  {value:3},
  {value:4},
  {value:5},
]

const Cell = (props) => {
  let value = props.value;
  let index = props.index;
  let color = props.color;
  const style = {
    border: "1px solid",
    borderColor: color,
    display: "flex",
    borderRadius: "5px",
    borderCollapse: "collapse",
    backgroundColor:"white",
    textAlign: "center",
    padding:"25px",
    fontSize: "large"
  }
  return (
    <div key={index} style={style}>
      {value}
    </div>
  );
}

const Arr = (props) => {
  let array = props.array;
  return (
    <div className={styles.array}>
      {
        array.map((cell, index) => (
          <Cell value={cell.value} index={index} color="black"/>
        ))
      }
    </div>
  );
}

const OperationField = (props) => {
  let form = props.form;
  let setForm = props.onOperation;
  return (
    <label>
      Operation:
      <select 
      name="operation" 
      id="operation_select"
      onChange={e => {
        setForm({
          ...form,
          operation: e.target.value
        });
      }}
      >
        <option value="">Select an Operation</option>
        <option value="search">Search</option>
        <option value="add">Add</option>
        <option value="delete">Delete</option>
      </select>
    </label>
  );
}

const SizeField = (props) => {
  let form = props.form;
  let setForm = props.onSize;
  return (
    <label>
        Size: 
        <input 
          type="text" 
          id="size" 
          name="array_size" 
          value={form.size}
          onChange={e => {
            setForm({
              ...form,
              size: e.target.value
            });
          }}
        />
    </label>
  );
}

const Form = () => {
  const [array, setArray] = useState(initialArray);
  const [form, setForm] = useState({
    size: 5,
    operation: 'choose an operation'
  })
  const [submitted, setSubmission] = useState(false);

  function handleClick() {
    setArray(randomArray);
    setSubmission(true);
  }

  function performOperation(operation) {
    switch (operation) {
      case "search":
        console.log("Search");
      case "add":
        console.log("Search");
      case "delete":
        console.log("Delete");
      default:
        console.log("Choose an operation");
    }
  }

  function randomArray() {
    array = [];
    for (let i = 0; i < form.size; i++) {
      let cell = {
        value : Math.floor(Math.random() * 50),
        color : "black"
      }
      array.push(cell);
    }
    return array;
  }

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <div className={styles.ArrayPage}>
    <form onSubmit={submitForm}>
      <SizeField form={form} onSize={setForm} />
      <OperationField form={form} onOperation={setForm} />
      <button type="button" name="execute" onClick={handleClick}>Execute</button>
    </form>
    {form.operation === "choose an operation" ? <Arr array={array}/> : null}
    </div>
  );
}

const ArrayDS = () => {
  return (
    <div className={styles.ArrayPage}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
      <Form />
    </div>
  );
}

 
export default ArrayDS;




