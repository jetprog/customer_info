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

          <div className="generate-contract-content">
              <h2>Basic Info</h2>
              <div className="generate-contract-div-info">
                <label className="generate-contract-label-question">Name: </label>
                <label className="generate-contract-labelAnswer">Larissa Harrington</label>
              </div>

              <div className="generate-contract-div-info">
                <label className="generate-contract-label-question">Address: </label>
                <label className="generate-contract-labelAnswer">
                  1878 Catlin Road, Charlottesville, VA 22911
                </label>
              </div>

              <div className="generate-contract-div-info">
                <label className="generate-contract-label-question">Email: </label>
                <label className="generate-contract-labelAnswer">larissa@gmail.com</label>
              </div>

              <div className="generate-contract-div-info">
                <label className="generate-contract-label-question">Phone: </label>
                <label className="generate-contract-labelAnswer">978-857-1508</label>
              </div>

              <div className="generate-contract-div-info">
                <label className="generate-contract-label-question">Account#: </label>
                <label className="generate-contract-labelAnswer">11378</label>
              </div>
          </div>

          <div className="generate-contract-content">
            <h2>Price & Financing Details</h2>
            <div className="generate-contract-div-info">
                <label className="generate-contract-label-question">Total Price: </label>
                <label className="generate-contract-labelAnswer">$89,837</label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Payment Method: </label>
              <label className="generate-contract-labelAnswer">Financing</label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Financier </label>
              <label className="generate-contract-labelAnswer">ECG</label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Product: </label>
              <label className="generate-contract-labelAnswer">Product 1</label>
            </div>
          </div>

          <div className="generate-contract-content">
            <h2>Energy Info</h2>
            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Utility Company: </label>
              <label className="generate-contract-labelAnswer">Dominion Energy</label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Account#: </label>
              <label className="generate-contract-labelAnswer">78292894</label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Heating: </label>
              <label className="generate-contract-labelAnswer">Electric</label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Annual Consumption: </label>
              <label className="generate-contract-labelAnswer">21,384 kWh</label>
            </div>
          </div>

          <div className="generate-contract-content">
            <h2>Project Info</h2>
            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Signed Date: </label>
              <label className="generate-contract-labelAnswer">November 28, 2018</label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">System Size: </label>
              <label className="generate-contract-labelAnswer">24.7 kW</label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Number of Mods: </label>
              <label className="generate-contract-labelAnswer">82</label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Roof: </label>
              <label className="generate-contract-labelAnswer">
                Standing Seam Metal, Colonial Red
              </label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Details: </label>
              <label className="generate-contract-labelAnswer">n/a</label>
            </div>

            <div className="generate-contract-div-info">
              <label className="generate-contract-label-question">Adders: </label>
              <label className="generate-contract-labelAnswer">Multiple Arrays</label>
            </div>
          </div>

          <div className="generate-contract-content">
            <h2>Uploaded Documents</h2>
              <div className="generate-contract-info-space"><input type="checkbox"/><label className="generate-contract-upload-label"> 1. State Issued Drivers Licence (Restricted)</label> </div>
              <div className="generate-contract-info-space"><input type="checkbox"/><label className="generate-contract-upload-label"> 2. W2 (Restricted)</label></div>
              <div className="generate-contract-info-space"><input type="checkbox"/><label className="generate-contract-upload-label"> 3. Sales Photos</label></div>
              <div className="generate-contract-info-space"><input type="checkbox"/><label className="generate-contract-upload-label"> 4. Correct, NMIN, BC</label></div>
              <div className="generate-contract-info-space"><input type="checkbox"/><label className="generate-contract-upload-label"> 5. Home Insurance Policy</label></div>
              <div className="generate-contract-info-space"><input type="checkbox"/><label className="generate-contract-upload-label"> 6. Latest Proposal</label></div>
          </div>

          <div className="generate-contract-content">
            <h2>Preferred Communication</h2>
            <div>
              <input type="checkbox" value='phone'
              name="communication" onChange={this.handleChange}/> <label className="generate-contract-communication-checkbox">Phone</label>
              <input  type="checkbox" value='Text'
              name="communication" onChange={this.handleChange}/> <label className="generate-contract-communication-checkbox">Text</label>
              <input type="checkbox" value='Email'
              name="emails" onChange={this.handleChange}/> Email
            </div>
          </div>

          <div className="generate-contract-content">
            <h2>Financial Info</h2>
              <div className="form-group">
                <label className="generate-contract-label-question">Social Security Number: </label>
                <label type="text" className="generate-contract-labelAnswer">###-##-###</label>
              </div>

              <div className="generate-contract-info-space">
                <label className="generate-contract-label-question">Combined Income: </label>
                <label type="text" className="generate-contract-labelAnswer">$439,000</label>
              </div>

              <div className="generate-contract-info-space">
                <div>
                  <label className="generate-contract-label-question">Debt: </label>
                  <label className="generate-contract-labelAnswer">$157,000</label>
                </div>
                <div className="generate-contract-info-space">
                  <label className="generate-contract-label-question">Credit Score: </label>
                  <label type="text" className="generate-contract-labelAnswer">743</label>
                </div>
              </div>

              <div className="generate-contract-info-space">
                <label className="generate-contract-label-question">Number of Years at Address: </label>
                <label type="text" className="generate-contract-labelAnswer">14</label>
              </div>

              <div className="generate-contract-info-space">
                <label className="generate-contract-label-question">Employer: </label>
                <label type="text" className="generate-contract-labelAnswer">CFA Institute</label>
              </div>

              <div className="generate-contract-info-space">
                <label className="generate-contract-label-question">Number of Years with Employer: </label>
                <label type="text" className="generate-contract-labelAnswer">12</label>
              </div>

              <div className="generate-contract-info-space">
                <label className="generate-contract-label-question">Legally Married: </label>
                <label type="text" className="generate-contract-labelAnswer">Yes</label>
              </div>

              <div className="generate-contract-info-space">
                <label className="generate-contract-label-question">Annual Liabillities </label>
                <label type="text" className="generate-contract-labelAnswer">34,000</label>
              </div>

              <div className="generate-contract-info-space">
                <label className="generate-contract-label-question">Assets: </label>
                <label type="text" className="generate-contract-labelAnswer">n/a</label>
              </div>

              <div className="generate-contract-info-space">
                <label className="generate-contract-label-question">Bank: </label>
                <label type="text" className="generate-contract-labelAnswer">Bank of America</label>
              </div>

              <div className="generate-contract-info-space">
                <label className="generate-contract-label-question"># of Years at Bank: </label>
                <label type="text" className="generate-contract-labelAnswer">22</label>
              </div>

              <div className="generate-contract-info-space">
                <label className="generate-contract-label-question">Total Balances: </label>
                <label type="text" className="generate-contract-labelAnswer">$48,000</label>
              </div>
          </div>

          <div className="generate-contract-content">
            <h2>Home Info</h2>
            <div className="generate-contract-info-space">
              <label className="generate-contract-label-question">Square Footage of Home: </label>
              <label type="text" className="generate-contract-labelAnswer">3,982</label>
            </div>

            <div className="generate-contract-info-space">
              <label className="generate-contract-label-question">Home Value (Cost Estimate): </label>
              <label type="text" className="generate-contract-labelAnswer">$608,999</label>
            </div>

            <div className="generate-contract-info-space">
              <label className="generate-contract-label-question">New Construction? </label>
              <label type="text" className="generate-contract-labelAnswer">No </label>
            </div>
          </div>

        </div>

        <div className="generate-contract-rightDiv">
          <div className="generate-contract-content-right">
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2">
                <h2>Home Owners Insurance</h2>
                <div className="generate-contract-div-info-right">
                  <label className="generate-contract-label-question">Insurance Company: </label>
                  <input type="text" className="generate-contract-insurance-input" value={this.state.insurance}
                  name="insurance" onChange={this.handleChange}/>
                </div>

                <div className="generate-contract-div-info-right">
                  <label className="generate-contract-label-question">Policy #: </label>
                  <input type="text" className="generate-contract-policy-input" value={this.state.policyNumber}
                  name="policyNumber" onChange={this.handleChange}/>
                </div>

                <div className="generate-contract-div-info-right">
                  <label className="generate-contract-label-question">Policy Amount Coverage: </label>
                  <input type="text" className="generate-contract-amount-input" value={this.state.policyAmount}
                  name="policyAmount" onChange={this.handleChange}/>
                </div>

                <div className="generate-contract-div-info-right">
                  <label className="generate-contract-label-question">Policy Dates: </label>
                  <input type="text" className="generate-contract-date-input" value={this.state.insurance}
                  name="insurance" onChange={this.handleChange}/>
                  <label className="generate-contract-label-question-date">to</label>
                  <input type="text" className="generate-contract-date-input" value={this.state.insurance}
                  name="insurance" onChange={this.handleChange}/>
                </div>

                <div className="generate-contract-div-info-right">
                  <label className="generate-contract-label-question">Address: </label>
                  <input type="text" className="generate-contract-address-input" value={this.state.address}
                  name="address" onChange={this.handleChange}/>
                </div>

                <div className="generate-contract-div-info-right">
                  <label className="generate-contract-label-question">Name: </label>
                  <input type="text" className="generate-contract-name-input" value={this.state.name}
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

          <div className="generate-contract-section-right-space">
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

          <div className="generate-contract-section-right-space">
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

          <div className="generate-contract-section-right-space">
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2"><h2>HOQ Package Needed</h2></div>
            </div>
          </div>

          <div className="generate-contract-section-right-space">
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

          <div className="generate-contract-section-right-space">
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2"><h2>MSA Needed</h2></div>
            </div>
          </div>

          <div className="">
            <div className="generate-contract-grid-container">
              <div className="item1"><input className="generate-contract-checkbox" type="checkbox"/></div>
              <div className="item2"><h2>Credit Repair Only</h2></div>
            </div>
          </div>

          <div className="generate-contract-wrapper-button-final">
            <button className="generate-contract-button">GENERATE FINAL CONTRACT</button>
          </div>



        </div>

      </div>
    );
  }

}

export default Contract;