import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">

        <div className="App">
          <h1>CUSTOMER INFORMATION</h1>
        </div>

        <div className="basic_info">
          <h2>Basic Info</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>1</div>
          <div>2</div>
        </div>

        <div className="home_info">
          <h2>Home Info</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="home_info">
          <h2>Energy Info</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="home_info">
          <h2>Financial Info</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="basic_info">
          <h2>Preferred Communication Method</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>1</div>
          <div>2</div>
        </div>

        <div className="home_info">
          <h2>Sales Notes</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="home_info">
          <h2>Account Management Notes</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="home_info">
          <h2>Project Info</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="home_info">
          <h2>Sales Info</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="home_info">
          <h2>Load Info</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="home_info">
          <h2>Uploaded Documents</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

      </div>
    );
  }
}

export default App;
