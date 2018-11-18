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
            <select className="energy-select"></select>
          </div>
          <div>
            <label>Product: </label>
            <select className="energy-select"></select>
          </div>

          <div>
            <button className="validate-button">PRE-APPROVE</button>
            <button className="validate-button">APPROVE</button>
          </div>

          <div>
            <input type="checkbox"/> Ready <input type="checkbox"/> Missing info below
          </div>
        </div>

        <div className="financing-body">

          <div className="financing-item">
            <div className="basic-info">
              <div>
                <input type="checkbox"/>
                <span className="component-title">Basic Info</span>
                <input type="checkbox"/>
              </div>
              <div className="basic">
                <label className="basic-info-label">Name: </label>
                <input className="basic-info" type="text" placeholder="Larissa H." value={this.state.name}
                name="name" onChange={this.handleChange}/>
              </div>

              <div>
                <label className="basic-info-label">Address: </label>
                <input className="basic-info" type="text" placeholder="1878 Catlin Road" value={this.state.address}
                name="address" onChange={this.handleChange}/>
              </div>

              <div>
                <label className="basic-info-label">Email: </label>
                <input className="basic-info" placeholder="larissa@gmail.com" type="text" value={this.state.email}
                name="email" onChange={this.handleChange}/>
              </div>

              <div>
                <label className="basic-info-label">Phone: </label>
                <input className="basic-info" placeholder="978-857-1508" type="text" value={this.state.phone}
                name="phone" onChange={this.handleChange}/>
              </div>

              <div>
                <label className="basic-info-label">Account#: </label>
                <input className="basic-info" placeholder="11378" type="text" value={this.state.account}
                name="account" onChange={this.handleChange}/>
              </div>
            </div>

            <div className="energy-info">
              <span className="component-title">Energy Info</span>
              <input type="checkbox"/>
              <div>
              <br/>
              <label className="basic-info-label">Utility Company:</label> <select className="energy-select"><option>Dominion Energy</option></select>
              </div>
              <div className="basic-info" >
                <label className="basic-info-label">Account#: </label>
                <input type="text" className="energy-input" placeholder="78292894"/>
                <label className="basic-info-label">Heating:</label> <input className="energy-input" placeholder="Electric" type="text"/>
              </div>

              <div  className="basic-info">
                <label className="basic-info-label">12 Month Consumption:</label>
                <br/>
                <div className="energy-flex">
                  <label className="basic-info-label">Jan:</label> <input className="energy-input" placeholder="8474" type="text"/> <label className="basic-info-label">May:</label> <input className="energy-input" placeholder="4332" type="text"/><label className="basic-info-label">Sep:</label> <input className="energy-input" placeholder="4332" type="text"/>
                </div>
                <div className="energy-flex">
                  <label className="basic-info-label">Feb:</label> <input className="energy-input" placeholder="8474" type="text"/> <label className="basic-info-label">Jun:</label> <input className="energy-input" placeholder="942" type="text"/> <label className="basic-info-label">Oct:</label> <input className="energy-input" placeholder="2984" type="text"/>
                </div>
                <div className="energy-flex">
                  <label className="basic-info-label">Mar:</label> <input className="energy-input" placeholder="3425" type="text"/> <label className="basic-info-label">Jul:</label> <input className="energy-input" placeholder="3321" type="text"/><label className="basic-info-label">Nov:</label> <input className="energy-input" placeholder="982" type="text"/>
                </div>
                <div className="energy-flex">
                  <label className="basic-info-label">Apr:</label> <input className="energy-input" placeholder="232" type="text"/> <label className="basic-info-label">Aug:</label> <input className="energy-input" placeholder="445" type="text"/><label className="basic-info-label">Dec:</label> <input className="energy-input" placeholder="2873" type="text"/>
                </div>
              </div>
            </div>

            <div className="energy-info">
              <span className="component-title">Project Info</span>
              <input type="checkbox"/>
              <div className="project-info-space">
                <label className="basic-info-label">Signed Date: </label>
                <input type="text" className="energy-input" placeholder="November 28, 2018"/>
              </div>

              <div className="project-info-space">
                <div>
                  <label className="basic-info-label">Price: </label>
                  <input type="text" className="energy-input" placeholder="$89,937" value={this.state.price}
                  name="price" onChange={this.handleChange}/>
                </div>
                <div className="project-info-space">
                  <label className="basic-info-label">System Size: </label>
                  <input type="text" className="energy-input" placeholder="24.7 KW" value={this.state.systemPrice}
                  name="systemPrice" onChange={this.handleChange}/>
                </div>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Details: </label>
                <input type="text" className="energy-input" placeholder="n/a" value={this.state.details}
                name="details" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Adders: </label>
                <input type="text" className="energy-input" placeholder="Multiple" value={this.state.adders}
                name="adders" onChange={this.handleChange}/>
              </div>

              <div className="energy-info">
                <span className="component-title">Uploaded Documents</span>
                <input type="checkbox"/>
                <div className="project-info-space"><input type="checkbox"/><label className="upload-label"> 1. State Issued Drivers Licence (Restricted)</label> </div>
                <div className="project-info-space"><input type="checkbox"/><label className="upload-label"> 2. W2 (Restricted)</label></div>
                <div className="project-info-space"><input type="checkbox"/><label className="upload-label"> 3. Sales Photos</label></div>
                <div className="project-info-space"><input type="checkbox"/><label className="upload-label"> 4. Correct NMIN BC</label></div>
                <div className="project-info-space"><input type="checkbox"/><label className="upload-label"> 5. Home Insurance Policy</label></div>
                <div className="project-info-space"><input type="checkbox"/><label className="upload-label"> 6. Latest Propose</label></div>
                <div className="project-info-space"><input className="uploadedDocuments" type="button" value="Upload Document"/></div>
              </div>

              <div className="energy-info">
                <input type="checkbox"/>
                <span className="component-title">Preferred Communication Method</span>
                <input type="checkbox"/>
                <br/>
                <br/>
                <div>
                  <input type="checkbox" value='phone'
                  name="communication" onChange={this.handleChange}/> <label className="communication-checkbox">Phone</label>
                  <input  type="checkbox" value='Text'
                  name="communication" onChange={this.handleChange}/> <label className="communication-checkbox">Text</label>
                  <input type="checkbox" value='Email'
                  name="emails" onChange={this.handleChange}/> Email
                </div>
              </div>
            </div>
          </div>

          <div class="financing-item">
            <div className="home-info">
              <input type="checkbox"/>
              <span className="component-title">Home Info</span>
              <input type="checkbox"/>
              <div className="project-info-space">
                <label className="basic-info-label">Square Footage of Home: </label>
                <input type="text" className="energy-input" placeholder="3,982" value={this.state.squareFootHome}
                name="squareFootHome" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
               <label className="basic-info-label">Home Value: (Cost Estimate)</label>
               <input type="text" className="energy-input" placeholder="$608,999" value={this.state.homeValue}
                name="homeValue" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
               <label className="basic-info-label">New Construction?</label>
               <input type="text" className="energy-input" placeholder="No" value={this.state.homeValue}
                name="homeValue" onChange={this.handleChange}/>
              </div>
            </div>

            <div className="energy-info">
              <span className="component-title">Financial Info</span>
              <input type="checkbox"/>
              <br/>
              <br/>
              <div className="form-group">
                <label className="basic-info-label">Social Security Number: </label>
                <input type="text" className="financing-input" placeholder="###-##-###"
                name="combinedIncome" onChange={this.handleChange} />
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Combined Income: </label>
                <input type="text" className="financing-input" placeholder="$439,000"
                name="combinedIncome" onChange={this.handleChange} />
              </div>

              <div className="project-info-space">
                <div>
                  <label className="basic-info-label">Debt: </label>
                  <input className="financing-input" placeholder="$157,000" type="text" value={this.state.debt}
                  name="debt" onChange={this.handleChange}/>
                </div>
                <div className="project-info-space">
                  <label className="basic-info-label">Credit Score: </label>
                  <input type="text" className="financing-input" placeholder="743" styles={"width: 300px;"} value={this.state.crediStore}
                  name="crediStore" onChange={this.handleChange}/>
                </div>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Number of Years at Address: </label>
                <input type="text" className="financing-input" placeholder="14" value={this.state.numberYearsAdress}
                name="numberYearsAdress" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Employer: </label>
                <input type="text" className="financing-input" placeholder="CFA Institute" value={this.state.employer}
                name="employer" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Number of Years with Employer: </label>
                <input type="text" className="financing-input" placeholder="12`" value={this.state.numberYearEmployer}
                name="numberYearEmployer" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Legally Married: </label>
                <input type="text" className="financing-input" placeholder="Yes" name="statusMatrimonial" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Annual Liabillities </label>
                <input type="text" className="financing-input" placeholder="34,000" value={this.state.annualLiabillities}
                name="annualLiabillities" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Assets: </label>
                <input type="text" className="financing-input" placeholder="n/a" value={this.state.assets}
                name="assets" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Bank: </label>
                <input type="text" className="financing-input" placeholder="Bank of America" value={this.state.bank}
                name="bank" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label"># of Years at Bank: </label>
                <input type="text" className="financing-input" placeholder="22" value={this.state.numberYearBank}
                name="numberYearBank" onChange={this.handleChange}/>
              </div>

              <div className="project-info-space">
                <label className="basic-info-label">Total Balances: </label>
                <input type="text" className="financing-input" placeholder="$48,000" value={this.state.totalBalance}
                name="totalBalance" onChange={this.handleChange}/>
              </div>
            </div>

            <div className="financing-notes">
              <h2 className="component-title">Financing Notes</h2>
              <textarea rows="5" cols="50"
                name="salesNotes" onChange={this.handleChange}>
              </textarea>
            </div>

            <div className="sales-notes">
              <h2 className="component-title">Account Management Notes Notes</h2>
              <textarea rows="5" cols="50"
                name="salesNotes" onChange={this.handleChange}>
              </textarea>
            </div>

            <div className="financing-notes">
              <h2 className="component-title">Sales Notes</h2>
              <textarea rows="5" cols="50"
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