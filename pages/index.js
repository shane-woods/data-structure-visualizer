import React from 'react';
import * as ReactDOM from 'react-dom';
import Image from 'next/image'
import arrayIMG from '../public/images/array.png'
import linkedlistIMG from '../public/images/linkedlist.png'
import bstIMG from '../public/images/bst.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: null,
    };
  }

  render() {
    return (
      <div className="Home">
        <nav className="Home-header">
          <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="Home-page">
          <h1>Data Structure Visualizer</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <a href ="./Array.js"> 
                    <Image className="dsIMG" src={arrayIMG} alt="Image of an Array"/>
                  </a>
                  <p className="IMGcap">Array</p>
                </td>
                <td>
                  <a href="#">
                    <Image className="dsIMG" src={linkedlistIMG} alt="Image of a Linked List"/>
                  </a>
                  <p className="IMGcap">Linked List</p>
                </td>
                <td>
                  <a href="#">
                    <Image className="dsIMG" src={bstIMG} alt="Image of a Binary Search Tree"/>
                  </a>
                  <p className="IMGcap">Binary Search Tree</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;



