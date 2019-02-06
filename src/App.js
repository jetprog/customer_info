import React, { Component } from 'react';
// import './App.css';
// import Home from './Home'
import Financing from './Financing';
import Contract from './Contract';

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

    // this.handleChange = this.handleChange.bind(this);
    // this.submit = this.submit.bind(this);

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
      <Contract/>
    );
  }
}

export default App;
