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
      account: [],
      squareFootHome: '',
      homeValue: '',
      newConstruction: '',
      UtilityCompany: '',
      heating: '',
      // ?????
      combinedIncome: '',
      numberYearsAdress: '',
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
      sytemPrice: '',
      adders: '',
      details: '',
      salesPerson: '',
      sellers: '',
      reffered: '',
      loadSource: '',
      describeBrandRecognition: '',
      uploadedDocuments: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="container">

        <div className="App">
          <h1>CUSTOMER INFORMATION</h1>
        </div>

        <div className="basic_info">
          <h2>Basic Info</h2>
          <div>
            Name: <input type="text" value={this.state.name}
            name="name" onChange={this.handleChange}/>
          </div>
          <div>
            Address: <input type="text" value={this.state.address}
            name="address" onChange={this.handleChange}/>
          </div>
          <div>
            Email: <input type="text" value={this.state.email}
            name="email" onChange={this.handleChange}/>
          </div>
          <div>
            Phone: <input type="text" value={this.state.phone}
            name="phone" onChange={this.handleChange}/>
          </div>
          <div>
            Account: <input type="text" value={this.state.account}
            name="account" onChange={this.handleChange}/>
          </div>
        </div>

        <div className="home_info">
          <h2>Home Info</h2>
          <div>Square Footage of Home <input type="text"/></div>
          <div>Home Value: (Cost Estimate) <input type="text"/></div>
          <div>New Construction? <input type="checkbox"/> Yes <input type="checkbox"/> No</div>
        </div>

        <div className="home_info">
          <h2>Energy Info</h2>
          <div>Utility Company <select></select> </div>
          <div>Account #: <input type="text"/> Heating: <input type="checkbox"/> Electric    <input type="checkbox"/> Propane</div>
          <div>
            <br/>12 Month Consumption:
            <br/>
            <div>Jan: <input type="text"/> May: <input type="text"/> Sep: <input type="text"/></div>
            <div>Feb: <input type="text"/> Jun: <input type="text"/> Oct: <input type="text"/></div>
            <div>Mar: <input type="text"/> Jul: <input type="text"/> Nov: <input type="text"/></div>
            <div>Apr: <input type="text"/> Aug: <input type="text"/> Dec: <input type="text"/></div>
          </div>
        </div>

        <div className="home_info">
          <h2>Financial Info</h2>
          <div>Combined Income: <input type="text"/></div>
          <div>Debt: <input type="text"/>  Credit Score: <input type="text"/></div>
          <div>Number of Years at Address: <input type="text"/></div>
          <div>Employer: <input type="text"/></div>
          <div>Number of Years with Employer: <input type="text"/></div>
          <div><input type="checkbox"/> Legally Married <input type="checkbox"/> Single</div>
          <div>Annual Lia??? <input type="text"/></div>
          <div>Assets: <input type="text"/></div>
          <div>Bank: <input type="text"/></div>
          <div># of Years at Bank: <input type="text"/></div>
          <div>Total Balances: <input type="text"/></div>
        </div>

        <div className="basic_info">
          <h2>Preferred Communication Method</h2>
          <div>
            <input type="checkbox"/> Phone <input type="checkbox"/> Text <input type="checkbox"/> Email
          </div>
        </div>

        <div className="home_info">
          <h2>Sales Notes</h2>
          <textarea rows="10" cols="50">
          </textarea>
        </div>

        <div className="home_info">
          <h2>Account Management Notes</h2>
          <textarea rows="10" cols="50">
          </textarea>
        </div>

        <div className="home_info">
          <h2>Project Info</h2>
          <div>Signed Date: <input type="checkbox"/></div>
          <div>Price: <input type="text"/> System Price <input type="text"/></div>
          <div>Adders: <input type="text"/></div>
          <div>Details: <input type="text"/></div>
        </div>

        <div className="home_info">
          <h2>Sales Info</h2>
          <div>Sales Person: <input type="text"/></div>
          <div>Seller: <input type="text"/></div>
          <div>Reffered by: <input type="text"/></div>
        </div>

        <div className="home_info">
          <h2>Load Info</h2>
          <div>Load Source <select></select></div>
          <div>Describe Brand Recognition: <input type="text"/> </div>
        </div>

        <div className="home_info">
          <h2>Uploaded Documents</h2>
          <div><input type="checkbox"/> 1_ State Issued Drivers Licence (Restricted) </div>
          <div><input type="checkbox"/> 2_ W2 (Restricted)</div>
          <div><input type="checkbox"/> 3_ Sales Photos</div>
          <div><input type="checkbox"/> 4_ Correct NMIN BC</div>
          <div><input type="checkbox"/> 5_ Home Insurance Policy</div>
          <div><input type="checkbox"/> 6_ Latest Propose</div>
          <div><button type="button">Upload Document</button></div>
        </div>

        <div><br/><button type="button">Done</button></div>

      </div>
    );
  }
}

export default App;
