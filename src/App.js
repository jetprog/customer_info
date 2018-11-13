import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      email: '',
      phone: '',
      account: '',
      squareFootHome: '',
      homeValue: '',
      newConstruction: '',
      UtilityCompany: '',
      heating: '',
      // jan: '',
      // feb: '',
      // mar: '',
      combinedIncome: '',
      debt: '',
      crediStore: '',
      numberYearsAdress: '',
      employer: '',
      numberYearEmployer: '',
      statusMatrimonial: '',
      annualLiabillities: '',
      assets: '',
      bank: '',
      numberYearBank: '',
      totalBalance: '',
      communication: '',
      salesNotes: '',
      accountManagement: '',
      signedDate: '',
      price: '',
      systemPrice: '',
      adders: '',
      details: '',
      salesPerson: '',
      sellers: '',
      reffered: '',
      loadSource: '',
      describeBrandRecognition: '',
      // uploadedDocuments: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);

  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value})
    console.log(e.target);
  }

  submit (){
    //Check if all input contains data
    //Now just put some field example
    if (this.state.name === '' || this.state.address === '') {
      alert("Field can't be empty");
    }
    else {
      alert("Success");
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
          <div className="basic">
            <label>Name: </label>
            <input type="text" value={this.state.name}
            name="name" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Address: </label>
            <input type="text" value={this.state.address}
            name="address" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Email: </label>
            <input type="text" value={this.state.email}
            name="email" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Phone: </label>
            <input type="text" value={this.state.phone}
            name="phone" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Account: </label>
            <input type="text" value={this.state.account}
            name="account" onChange={this.handleChange}/>
          </div>
        </div>

        <div>
          <h2>Home Info</h2>
          <div className="basic">
            <label>Square Footage of Home: </label>
            <input type="text" value={this.state.squareFootHome}
            name="squareFootHome" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Home Value: (Cost Estimate)</label>
            <input type="text" value={this.state.homeValue}
            name="homeValue" onChange={this.handleChange}/>
          </div>

          <div>New Construction?
            <input type="checkbox" value="yes"
            name="newConstruction" onChange={this.handleChange}/> Yes
            <input type="checkbox" value="no"
            name="newConstruction" onChange={this.handleChange}/> No
          </div>
        </div>

        <div>
          <h2>Energy Info</h2>
          <div>Utility Company <select></select>
          </div>
          <div className="basic">
            <label>Account#: </label>
            <input type="text"/>
            Heating: <input type="checkbox" value='Electric'
            name="heating" onChange={this.handleChange}/> Electric
            <input type="checkbox" value='Propane'
            name="heating" onChange={this.handleChange}/> Propane
          </div>

          {/*<div>
            <br/>12 Month Consumption:
            <br/>
            <div>Jan: <input type="text"/> May: <input type="text"/> Sep: <input type="text"/></div>
            <div>Feb: <input type="text"/> Jun: <input type="text"/> Oct: <input type="text"/></div>
            <div>Mar: <input type="text"/> Jul: <input type="text"/> Nov: <input type="text"/></div>
            <div>Apr: <input type="text"/> Aug: <input type="text"/> Dec: <input type="text"/></div>
          </div>*/}
        </div>

        <div>
          <h2>Financial Info</h2>
          <div className="basic">
            <label>Combined Income: </label>
            <input type="text" value={this.state.combinedIncome}
            name="combinedIncome" onChange={this.handleChange} />
          </div>

          <div className="basic">
            <label>Debt: </label>
            <input type="text" value={this.state.debt}
            name="debt" onChange={this.handleChange}/>
            Credit:<input type="text" value={this.state.crediStore}
            name="crediStore" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Number of Years at Address: </label>
            <input type="text" value={this.state.numberYearsAdress}
            name="numberYearsAdress" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Employer: </label>
            <input type="text" value={this.state.employer}
            name="employer" onChange={this.handleChange}/>
          </div>

          <div>
            <label>Number of Years with Employer: </label>
            <input type="text" value={this.state.numberYearEmployer}
            name="numberYearEmployer" onChange={this.handleChange}/>
          </div>

          <div>
            <input type="checkbox" value='Legally Married'
            name="statusMatrimonial" onChange={this.handleChange}/> Legally Married
            <input type="checkbox" value='Single'
            name="statusMatrimonial" onChange={this.handleChange}/> Single
          </div>

          <div className="basic">
            <label>Annual Liabillities </label>
            <input type="text" value={this.state.annualLiabillities}
            name="annualLiabillities" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Assets: </label>
            <input type="text" value={this.state.assets}
            name="assets" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Bank Info: </label>
            <input type="text" value={this.state.bank}
            name="bank" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label># of Years at Bank: </label>
            <input type="text" value={this.state.numberYearBank}
            name="numberYearBank" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Total Balances: </label>
            <input type="text" value={this.state.totalBalance}
            name="totalBalance" onChange={this.handleChange}/>
          </div>
        </div>

        <div className="basic_info">
          <h2>Preferred Communication Method</h2>
          <div>
            <input type="checkbox" value='phone'
            name="communication" onChange={this.handleChange}/> Phone
            <input type="checkbox" value='Text'
            name="communication" onChange={this.handleChange}/> Text
            <input type="checkbox" value='Email'
            name="emails" onChange={this.handleChange}/> Email
          </div>
        </div>

        <div className="home_info">
          <h2>Sales Notes</h2>
          <textarea rows="10" cols="50"
            name="salesNotes" onChange={this.handleChange}>
          </textarea>
        </div>

        <div className="home_info">
          <h2>Account Management Notes</h2>
          <textarea rows="10" cols="50"
            name="accountManagement" onChange={this.handleChange}>
          </textarea>
        </div>

        <div className="home_info">
          <h2>Project Info</h2>
          <div>
            <label>Signed Date: </label>
            <input type="date"/>
          </div>

          <div className="basic">
            <label>Price: </label>
            <input type="text" value={this.state.price}
            name="price" onChange={this.handleChange}/>
            System: <input type="text" value={this.state.systemPrice}
            name="systemPrice" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Adders: </label>
            <input type="text" value={this.state.adders}
            name="adders" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Details: </label>
            <input type="text" value={this.state.details}
            name="details" onChange={this.handleChange}/>
          </div>
        </div>

        <div className="home_info">
          <h2>Sales Info</h2>
          <div className="basic">
            <label>Sales Person: </label>
            <input type="text" value={this.state.salesPerson}
            name="salesPerson" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Seller: </label>
            <input type="text" value={this.state.sellers}
            name="sellers" onChange={this.handleChange}/>
          </div>

          <div className="basic">
            <label>Reffered by: </label>
            <input type="text" value={this.state.reffered}
            name="reffered" onChange={this.handleChange}/>
          </div>
        </div>

        <div className="home_info">
          <h2>Load Info</h2>
          <div>Load Source <select></select></div>

          <div className="basic">
            <label>Describe Brand Recognition: </label>
            <input type="text" value={this.state.describeBrandRecognition}
            name="describeBrandRecognition" onChange={this.handleChange}/>
          </div>
        </div>

        <div className="home_info">
          <h2>Uploaded Documents</h2>
          <div><input type="checkbox"/> 1_ State Issued Drivers Licence (Restricted) </div>
          <div><input type="checkbox"/> 2_ W2 (Restricted)</div>
          <div><input type="checkbox"/> 3_ Sales Photos</div>
          <div><input type="checkbox"/> 4_ Correct NMIN BC</div>
          <div><input type="checkbox"/> 5_ Home Insurance Policy</div>
          <div><input type="checkbox"/> 6_ Latest Propose</div>
          <div><input type="button" value="Upload Document"/></div>
        </div>

        <div className="submit"><br/>
          <button type="button" className="submitButton" onClick={() => this.submit()}>
          Done</button>
        </div>

      </div>
    );
  }
}

export default App;
