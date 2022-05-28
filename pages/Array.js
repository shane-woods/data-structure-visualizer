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
    <div className={styles.Array}>
      {array}
    </div>
  );
}

function Form() {
  const [size, setSize] = useState(5);
  const [isSubmitted, showArray] = useState(true);
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
    renderForm:(
      <form className={styles.Form} onSubmit={handleSubmit}>
        <label className={styles.Label}>Array Size:</label>
        <input 
        type="text"
        required
        value={size}
        onChange={handleChange}
        className={styles.sizeInput}
        /> 
        <label className={styles.Label}>Choose an operation: </label>
        <select>
          {operations.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <button className={styles.Button} onClick={(e) => showArray(true)}>Visualize!</button>
      </form>
    )
  }
}

function ArrayDS() {

  const {size, isSubmitted, renderForm} = Form();
  var doInsert = false;
  var doDelete = false;
  var doSearch = false;

//   if (isSubmitted) {
//     if (label === "insert") {
//       doInsert = true;
//     } else if (label === "delete") {
//       doDelete = true;
//     } else if (label === "search") {
//       doSearch = true;
//     }
// }

// console.log(label);
// console.log(doInsert);
// console.log(doDelete);
// console.log(doSearch);

  return (
    <div className={styles.ArrayPage}>
        <Navbar />
        {renderForm}
        <div className={styles.Array}>
          {isSubmitted && <Array size={size} />}
        </div>
        {/* <div className={styles.Insert}>
          {doInsert && <p>Inserting</p>}
        </div>
        <div className={styles.Delete}>
          {doInsert && <p>Deleting</p>}
        </div>
        <div className={styles.Search}>
          {doInsert && <p>Searching</p>}
        </div> */}
      </div>
  );
}

 
export default ArrayDS;





