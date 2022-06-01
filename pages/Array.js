import React, { useState, useEffect, useCallback} from 'react'
import styles from '../styles/Array.module.css'
import Navbar from '../components/navbar';

function Cell(props) {
  const value = props.value;
  const color = props.color;
  const borderWidth = props.borderWidth;
  return (
    <div className="Cell">
      <style jsx> {`
      .Cell {
        border: ${borderWidth} solid ${color};
        display:table-cell;
        min-height: 1em;
        min-width: 1em;
        text-align: center;
        padding: 15px;
      }
      `}</style>
      {value}
    </div>
  );
}

function Array(props) {
  const size = props.size;
  const array = [];
  array.length = 0;
  for (let i = 0; i < size; i++) {
    array[i] = <Cell 
    color="red" 
    value={Math.floor(Math.random() * 50)} 
    borderWidth="1px"
    />;
  }

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

   const setOp = useCallback (
      (e) => {
        e.preventDefault();
        setOperation(e.target.value);
      },
      [operation]
   );

  return (
    <select onChange={setOp}>
        {operations.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
    </select>
  );
}

function Form() {
  const [size, setSize] = useState(5);
  const [isSubmitted, showArray] = useState();

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
        <SelectOperation />
        <button className={styles.Button} onClick={(e) => showArray(true)}>Visualize!</button>
      </form>
    )
  }
}

function ArrayDS() {
  const {size, isSubmitted, renderForm} = Form();
  
  var doInsert;
  var doDelete;
  var doSearch;

  if (isSubmitted) {
    // if (operation === "insert") {
    //   doInsert = true;
    // } else if (operation === "delete") {
    //   doDelete = true;
    // } else if (operation === "search") {
    //   doSearch = true;
    // }

    console.log(isSubmitted);
}
  return (
    <div className={styles.ArrayPage}>
        <Navbar />
        {renderForm}
        <div className={styles.Array}>
          {isSubmitted && 
          <Array size={size} />}
        </div>
      </div>
  );
}

 
export default ArrayDS;





