import React, { Component } from 'react';
import './Financing.css';

class Financing extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      email: '',
      phone: '',
      account: ''
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value})
  }



  render() {
    return (
      <div className="financing-container">

        <div className="financing-header">
          <div>
            <label>Financier: </label>
            <select></select>
          </div>
          <div>
            <label>Product: </label>
            <select></select>
          </div>

          <div>
            <button>PRE-APPROVE</button> <button>APPROVE</button>
          </div>

          <div>
            <input type="checkbox"/> Ready <input type="checkbox"/> Missing info below
          </div>
        </div>

        <div className="financing-body">

          <div class="financing-item">
            <div className="basic-info">
              <h2>Basic Info</h2>
              <div className="basic">
                <label className="basic-info-label">Name: </label>
                <input className="basic-info" type="text" placeholder="Larissa H." value={this.state.name}
                name="name" onChange={this.handleChange}/>
              </div>

              <div className="basic">
                <label className="basic-info-label">Address: </label>
                <input className="basic-info" type="text" placeholder="1878 Catlin Road" value={this.state.address}
                name="address" onChange={this.handleChange}/>
              </div>

              <div className="basic">
                <label className="basic-info-label">Email: </label>
                <input className="basic-info" placeholder="larissa@gmail.com" type="text" value={this.state.email}
                name="email" onChange={this.handleChange}/>
              </div>

              <div className="basic">
                <label className="basic-info-label">Phone: </label>
                <input className="basic-info" placeholder="978-857-1508" type="text" value={this.state.phone}
                name="phone" onChange={this.handleChange}/>
              </div>

              <div className="basic">
                <label className="basic-info-label">Account#: </label>
                <input className="basic-info" placeholder="11378" type="text" value={this.state.account}
                name="account" onChange={this.handleChange}/>
              </div>
            </div>

            <div className="energy-info">
              <h2>Energy Info</h2>
              <div><label className="basic-info-label">Utility Company</label> <select></select></div>
              <div className="energy-flex">
                <label className="basic-info-label">Account#: </label>
                <input  className="basic-info" />
                <label>Heating:</label>
                <input className="basic-info" type="text"/>
              </div>

              <div>
                <label>12 Month Consumption:</label>
                <br/>
                <div className="basic">
                  Jan: <input className="sizeMonth" type="text"/> May: <input className="sizeMonth" type="text"/> Sep: <input type="text"/>
                </div>
                <div className="basic">Feb: <input className="sizeMonth" type="text"/> Jun: <input className="sizeMonth" type="text"/> Oct: <input type="text"/></div>
                <div className="basic">Mar: <input className="sizeMonth" type="text"/> Jul: <input className="sizeMonth" type="text"/> Nov: <input type="text"/></div>
                <div className="basic">Apr: <input className="sizeMonth" type="text"/> Aug: <input className="sizeMonth" type="text"/> Dec: <input type="text"/></div>
              </div>
            </div>

            <div className="project-info">

              <h2>Project Info</h2>
                <div>
                  <label>Signed Date: </label>
                  <input type="date"/>
                </div>

              <div className="basic_long">
                <div>
                  <label>Price: </label>
                  <input type="text" value={this.state.price}
                  name="price" onChange={this.handleChange}/>
                </div>
                <div>
                  <label>System price: </label>
                  <input type="text" value={this.state.systemPrice}
                  name="systemPrice" onChange={this.handleChange}/>
                </div>
              </div>

              <div className="basic">
                <label>Details: </label>
                <input type="text" value={this.state.details}
                name="details" onChange={this.handleChange}/>
              </div>

              <div className="basic">
                <label>Adders: </label>
                <input type="text" value={this.state.adders}
                name="adders" onChange={this.handleChange}/>
              </div>

              <div className="documents_info">
                <h2>Uploaded Documents</h2>
                <div><input type="checkbox"/> 1. State Issued Drivers Licence (Restricted) </div>
                <div><input type="checkbox"/> 2. W2 (Restricted)</div>
                <div><input type="checkbox"/> 3. Sales Photos</div>
                <div><input type="checkbox"/> 4. Correct NMIN BC</div>
                <div><input type="checkbox"/> 5. Home Insurance Policy</div>
                <div><input type="checkbox"/> 6. Latest Propose</div>
                <div><input className="uploadedDocuments" type="button" value="Upload Document"/></div>
              </div>

              <div className="communication-info">
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
            </div>
          </div>

          <div class="financing-item">
            <div className="home-info">
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

              <div className="basic">
               <label>New Construction?</label>
               <input type="text" value={this.state.homeValue}
                name="homeValue" onChange={this.handleChange}/>
              </div>
            </div>

            <div className="financing-info">
              <h2>Financial Info</h2>

              <div className="basic">
                <label>Social Security Number: </label>
                <input type="text" value={this.state.combinedIncome}
                name="combinedIncome" onChange={this.handleChange} />
              </div>

              <div className="basic">
                <label>Combined Income: </label>
                <input type="text" value={this.state.combinedIncome}
                name="combinedIncome" onChange={this.handleChange} />
              </div>

              <div className="basic_long">
                <div>
                  <label>Debt: </label>
                  <input type="text" value={this.state.debt}
                  name="debt" onChange={this.handleChange}/>
                </div>
                <div>
                  <label>Credit Score: </label>
                  <input type="text" styles={"width: 300px;"} value={this.state.crediStore}
                  name="crediStore" onChange={this.handleChange}/>
                </div>
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

              <div className="basic">
                <label>Number of Years with Employer: </label>
                <input type="text" value={this.state.numberYearEmployer}
                name="numberYearEmployer" onChange={this.handleChange}/>
              </div>

              <div>
                <label>Legally Married: </label>
                <input type="text"
                name="statusMatrimonial" onChange={this.handleChange}/>
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
                <label>Bank: </label>
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

            <div className="financing-notes">
              <h2>Financing Notes</h2>
              <textarea rows="10" cols="50"
                name="salesNotes" onChange={this.handleChange}>
              </textarea>
            </div>

            <div className="sales-notes">
              <h2>Account Management Notes Notes</h2>
              <textarea rows="10" cols="50"
                name="salesNotes" onChange={this.handleChange}>
              </textarea>
            </div>

            <div className="financing-notes">
              <h2>Sales Notes</h2>
              <textarea rows="10" cols="50"
                name="salesNotes" onChange={this.handleChange}>
              </textarea>
            </div>

          </div>

        </div>

      </div>
    );
  }

}

export default Financing;