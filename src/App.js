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
          <div>
            Square Footage of Home <input type="text" value={this.state.squareFootHome}
            name="squareFootHome" onChange={this.handleChange}/>
          </div>
          <div>
            Home Value: (Cost Estimate) <input type="text" value={this.state.homeValue}
            name="homeValue" onChange={this.handleChange}/>
          </div>
          <div>New Construction?
            <input type="checkbox" value="yes"
            name="newConstruction" onChange={this.handleChange}/> Yes
            <input type="checkbox" value="no"
            name="newConstruction" onChange={this.handleChange}/> No
          </div>
        </div>

        <div className="home_info">
          <h2>Energy Info</h2>
          <div>Utility Company <select></select>
          </div>
          <div>Account #:
            <input type="text"/> Heating: <input type="checkbox" value='Electric'
            name="heating" onChange={this.handleChange}/> Electric
            <input type="checkbox" value='Propane'
            name="heating" onChange={this.handleChange}/> Propane
          </div>
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
          <div>Combined Income: <input type="text" value={this.state.combinedIncome}
            name="combinedIncome" onChange={this.handleChange} />
          </div>
          <div>
            Debt: <input type="text" value={this.state.debt}
            name="debt" onChange={this.handleChange}/>
            Credit Score: <input type="text" value={this.state.crediStore}
            name="crediStore" onChange={this.handleChange}/>
          </div>
          <div>
            Number of Years at Address: <input type="text" value={this.state.numberYearsAdress}
            name="numberYearsAdress" onChange={this.handleChange}/>
          </div>
          <div>
            Employer: <input type="text" value={this.state.employer}
            name="employer" onChange={this.handleChange}/>
          </div>
          <div>
            Number of Years with Employer: <input type="text" value={this.state.numberYearEmployer}
            name="numberYearEmployer" onChange={this.handleChange}/>
          </div>
          <div>
            <input type="checkbox" value='Legally Married'
            name="statusMatrimonial" onChange={this.handleChange}/> Legally Married
            <input type="checkbox" value='Single'
            name="statusMatrimonial" onChange={this.handleChange}/> Single
          </div>
          <div>
            Annual Liabillities <input type="text" value={this.state.annualLiabillities}
            name="annualLiabillities" onChange={this.handleChange}/>
          </div>
          <div>
            Assets: <input type="text" value={this.state.assets}
            name="assets" onChange={this.handleChange}/>
          </div>
          <div>
            Bank: <input type="text" value={this.state.bank}
            name="bank" onChange={this.handleChange}/>
          </div>
          <div>
            # of Years at Bank: <input type="text" value={this.state.numberYearBank}
            name="numberYearBank" onChange={this.handleChange}/>
          </div>
          <div>
            Total Balances: <input type="text" value={this.state.totalBalance}
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
            Signed Date: <input type="date"/>
          </div>
          <div>
            Price: <input type="text" value={this.state.price}
            name="price" onChange={this.handleChange}/>
            System Price: <input type="text" value={this.state.systemPrice}
            name="systemPrice" onChange={this.handleChange}/>
          </div>
          <div>
            Adders: <input type="text" value={this.state.adders}
            name="adders" onChange={this.handleChange}/>
          </div>
          <div>
            Details: <input type="text" value={this.state.details}
            name="details" onChange={this.handleChange}/>
          </div>
        </div>

        <div className="home_info">
          <h2>Sales Info</h2>
          <div>
            Sales Person: <input type="text" value={this.state.salesPerson}
            name="salesPerson" onChange={this.handleChange}/>
          </div>
          <div>
            Seller: <input type="text" value={this.state.sellers}
            name="sellers" onChange={this.handleChange}/>
          </div>
          <div>
            Reffered by: <input type="text" value={this.state.reffered}
            name="reffered" onChange={this.handleChange}/>
          </div>
        </div>

        <div className="home_info">
          <h2>Load Info</h2>
          <div>Load Source <select></select></div>
          <div>
            Describe Brand Recognition: <input type="text" value={this.state.describeBrandRecognition}
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
          <div><button type="button">Upload Document</button></div>
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
