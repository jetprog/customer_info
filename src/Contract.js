import React, { Component } from 'react';
import './Contract.css';

class Contract extends Component {
  constructor (props) {
    super(props);

    this.state = {

    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value})
  }



  render() {
    return (

      <div className="generate-contract-container">

        <div className="generate-contract-leftDiv">

          <div>
              <h2>Basic Info</h2>
              <div className="financing-basic">
                <label className="financing-basic-info-label">Name: </label>
                <label className="generate-contract-labelAnswer">Larissa Harrington</label>
              </div>

              <div>
                <label className="financing--basic-info-label">Address: </label>
                <label className="financing-basic-info">
                  1878 Catlin Road, Charlottesville, VA 22911
                </label>
              </div>

              <div>
                <label className="financing-basic-info-label">Email: </label>
                <label className="financing-basic-info">larissa@gmail.com</label>
              </div>

              <div>
                <label className="financing-basic-info-label">Phone: </label>
                <label className="financing-basic-info">978-857-1508</label>
              </div>

              <div>
                <label className="financing-basic-info-label">Account#: </label>
                <label className="financing-basic-info">11378</label>
              </div>
          </div>

          <div>
            <h2>Price & Financing Details</h2>
            <div>
                <label className="financing-basic-info-label">Total Price: </label>
                <label className="financing-basic-info">$89,837</label>
            </div>

            <div>
              <label className="financing-basic-info-label">Payment Method: </label>
              <label className="financing-basic-info">Financing</label>
            </div>

            <div>
              <label className="financing-basic-info-label">Financier </label>
              <label className="financing-basic-info">ECG</label>
            </div>

            <div>
              <label className="financing-basic-info-label">Product: </label>
              <label className="financing-basic-info">Product 1</label>
            </div>
          </div>

          <div>
            <h2>Energy Info</h2>
            <div>
              <label className="financing-basic-info-label">Utility Company: </label>
              <label className="financing-basic-info">Dominion Energy</label>
            </div>

            <div>
              <label className="financing-basic-info-label">Account#: </label>
              <label className="financing-basic-info">78292894</label>
            </div>

            <div>
              <label className="financing-basic-info-label">Heating: </label>
              <label className="financing-basic-info">Electric</label>
            </div>

            <div>
              <label className="financing-basic-info-label">Annual Consumption: </label>
              <label className="financing-basic-info">21,384 kWh</label>
            </div>
          </div>

          <div>
            <h2>Project Info</h2>
            <div>
              <label className="financing-basic-info-label">Signed Date: </label>
              <label className="financing-basic-info">November 28, 2018</label>
            </div>

            <div>
              <label className="financing-basic-info-label">System Size: </label>
              <label className="financing-basic-info">24.7 kW</label>
            </div>

            <div>
              <label className="financing-basic-info-label">Number of Mods: </label>
              <label className="financing-basic-info">82</label>
            </div>

            <div>
              <label className="financing-basic-info-label">Roof: </label>
              <label className="financing-basic-info">
                Standing Seam Metal, Colonial Red
              </label>
            </div>

            <div>
              <label className="financing-basic-info-label">Details: </label>
              <label className="financing-basic-info">n/a</label>
            </div>

            <div>
              <label className="financing-basic-info-label">Adders: </label>
              <label className="financing-basic-info">Multiple Arrays</label>
            </div>
          </div>

          <div>
            <h2>Uploaded Documents</h2>
              <div className="financing-project-info-space"><input type="checkbox"/><label className="financing-upload-label"> 1. State Issued Drivers Licence (Restricted)</label> </div>
              <div className="financing-project-info-space"><input type="checkbox"/><label className="financing-upload-label"> 2. W2 (Restricted)</label></div>
              <div className="financing-project-info-space"><input type="checkbox"/><label className="financing-upload-label"> 3. Sales Photos</label></div>
              <div className="financing-project-info-space"><input type="checkbox"/><label className="financing-upload-label"> 4. Correct, NMIN, BC</label></div>
              <div className="financing-project-info-space"><input type="checkbox"/><label className="financing-upload-label"> 5. Home Insurance Policy</label></div>
              <div className="financing-project-info-space"><input type="checkbox"/><label className="financing-upload-label"> 6. Latest Proposal</label></div>
          </div>

          <div>
            <h2>Preferred Communication Method</h2>
            <div>
              <input type="checkbox" value='phone'
              name="communication" onChange={this.handleChange}/> <label className="financing-communication-checkbox">Phone</label>
              <input  type="checkbox" value='Text'
              name="communication" onChange={this.handleChange}/> <label className="financing-communication-checkbox">Text</label>
              <input type="checkbox" value='Email'
              name="emails" onChange={this.handleChange}/> Email
            </div>
          </div>

          <div>
            <h2>Financial Info</h2>
              <div className="form-group">
                <label className="financing-basic-info-label">Social Security Number: </label>
                <label type="text" className="financing-input">###-##-###</label>
              </div>

              <div className="financing-project-info-space">
                <label className="financing-basic-info-label">Combined Income: </label>
                <label type="text" className="financing-input">$439,000</label>
              </div>

              <div className="financing-project-info-space">
                <div>
                  <label className="financing-basic-info-label">Debt: </label>
                  <label className="financing-input">$157,000</label>
                </div>
                <div className="financing-project-info-space">
                  <label className="financing-basic-info-label">Credit Score: </label>
                  <label type="text" className="financing-input">743</label>
                </div>
              </div>

              <div className="financing-project-info-space">
                <label className="financing-basic-info-label">Number of Years at Address: </label>
                <label type="text" className="financing-input">14</label>
              </div>

              <div className="financing-project-info-space">
                <label className="financing-basic-info-label">Employer: </label>
                <label type="text" className="financing-input">CFA Institute</label>
              </div>

              <div className="financing-project-info-space">
                <label className="financing-basic-info-label">Number of Years with Employer: </label>
                <label type="text" className="financing-input">12</label>
              </div>

              <div className="financing-project-info-space">
                <label className="financing-basic-info-label">Legally Married: </label>
                <label type="text" className="financing-input">Yes</label>
              </div>

              <div className="financing-project-info-space">
                <label className="financing-basic-info-label">Annual Liabillities </label>
                <label type="text" className="financing-input">34,000</label>
              </div>

              <div className="financing-project-info-space">
                <label className="financing-basic-info-label">Assets: </label>
                <label type="text" className="financing-input">n/a</label>
              </div>

              <div className="financing-project-info-space">
                <label className="financing-basic-info-label">Bank: </label>
                <label type="text" className="financing-input">Bank of America</label>
              </div>

              <div className="financing-project-info-space">
                <label className="financing-basic-info-label"># of Years at Bank: </label>
                <label type="text" className="financing-input">22</label>
              </div>

              <div className="financing-project-info-space">
                <label className="financing-basic-info-label">Total Balances: </label>
                <label type="text" className="financing-input">$48,000</label>
              </div>
          </div>

        </div>

        <div className="generate-contract-rightDiv">
          <div>
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2">
                <h2>Home Owners Insurance</h2>
                <div>
                  <label className="">Insurance Company: </label>
                  <input type="text" className=""value={this.state.insurance}
                  name="insurance" onChange={this.handleChange}/>
                </div>

                <div>
                  <label className="">Policy #: </label>
                  <input type="text" className=""value={this.state.policyNumber}
                  name="policyNumber" onChange={this.handleChange}/>
                </div>

                <div>
                  <label className="">Policy Amount Coverage: </label>
                  <input type="text" className=""value={this.state.policyAmount}
                  name="policyAmount" onChange={this.handleChange}/>
                </div>

                <div>
                  <label className="">Policy Dates: </label>
                  <input type="text" className=""value={this.state.insurance}
                  name="insurance" onChange={this.handleChange}/>
                  <label>to</label>
                  <input type="text" className=""value={this.state.insurance}
                  name="insurance" onChange={this.handleChange}/>
                </div>

                <div>
                  <label className="">Address: </label>
                  <input type="text" className=""value={this.state.address}
                  name="address" onChange={this.handleChange}/>
                </div>

                <div>
                  <label className="">Name: </label>
                  <input type="text" className=""value={this.state.name}
                  name="name" onChange={this.handleChange}/>
                </div>

                <div className="generate-contract-wrapper-button">
                  <button className="generate-contract-upload-insurance">
                    Upload Insurance Policy
                  </button>
                </div>

              </div>
            </div>
          </div>

          <div>
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2">
                <h2>Appointment Setter</h2>
                <div>
                  <input className="generate-contract-appointment" type="text" value={this.state.setter}
                    name="setter" onChange={this.handleChange}/>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2">
                <h2>Referred By</h2>
                <div>
                  <input className="generate-contract-appointment" type="text" value={this.state.reffered}
                    name="reffered" onChange={this.handleChange}/>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2"><h2>HOQ Package Needed</h2></div>
            </div>
          </div>

          <div>
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2">
                <h2>Conditional Hold</h2>
                <div>
                  <textarea rows="12" cols="62"
                    name="conditional" onChange={this.handleChange}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2"><h2>MSA Needed</h2></div>
            </div>
          </div>

          <div>
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2"><h2>Credit Repair Only</h2></div>
            </div>
          </div>

          <div className="generate-contract-wrapper-button">
            <button className="generate-contract-button">GENERATE FINAL CONTRACT</button>
          </div>



        </div>

      </div>
    );
  }

}

export default Contract;