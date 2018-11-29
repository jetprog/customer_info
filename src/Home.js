import React, { Component } from 'react';
import './Home.css';

const Home = (props) => (
  <div className="build-reduce-main">

    <div className="build-reduce-body-content">
      <div className="build-reduce-divSpace">
        With the <b class="build-reduce-orange"> 24.6 kw system</b>
        <br/>Sigora will include <b class="build-reduce-orange">$6,000 value*</b>
        <br/>of energy efficiency which will reduce
        <br/>energy consumption by <b class="build-reduce-orange">12%</b>
        <br/>and save <b class="build-reduce-orange">$130/ month</b>, lifetime savings of <b class="build-reduce-orange">$17,000</b>
      </div>
      <span className="build-reduce-line">
        <h1 className="build-reduce-bold-line">___________________________________________</h1>
      </span>
      <div class="build-reduce-grid-container">
          <div class="build-reduce-grid-item"><span><b>BPI Energy Audit</b></span></div>
          <div class="build-reduce-grid-item">Included</div>
          <div class="build-reduce-grid-item"></div>
          <div class="build-reduce-grid-item"><input type="checkbox"/></div>

          <div class="build-reduce-grid-item"><span><b>Attic Spray Foam Isluation</b></span></div>
          <div class="build-reduce-grid-item"><span><b>SAVINGS</b> <br/>8% energy <br/>$57/month <br/>$16,000 lifetime</span></div>
          <div class="build-reduce-grid-item"><span><b>COST</b> <br/>$10/month <br/>$2,400</span></div>
          <div class="build-reduce-grid-item"><input type="checkbox"/></div>

          <div class="build-reduce-grid-item"><span><b>Programable Thermostat</b></span></div>
          <div class="build-reduce-grid-item"><span><b>SAVINGS</b> <br/>3% energy <br/>$6/month <br/>$490 lifetime</span></div>
          <div class="build-reduce-grid-item"><span><b>COST</b> <br/>$1/month <br/>$200</span></div>
          <div class="build-reduce-grid-item"><input type="checkbox"/></div>

      </div>
      <span className="line">
        _______________________________________________________________________________________
      </span>
    </div>
    <div className="build-reduce-image">
      <img src={require('./DownArrow.svg')} height="480" />
    </div>
    <div className="build-reduce-footer">

      <div className="build-reduce-grid-three">
        <div class="build-reduce-item-three"><span class="build-reduce-orange">Total</span></div>
        <div class="build-reduce-item-three"><span><b class="build-reduce-orange">SAVINGS</b> <br/>11% energy <br/>$63/month <br/>$16,490 lifetime</span></div>
        <div class="build-reduce-item-three"><span><b class="build-reduce-orange">COST</b> <br/>$11/month <br/>$2600</span>
        </div>
      </div>

      <div className="build-reduce-end">
        <div>
          <span className="build-reduce-resume">* $ Value is market pricing for the energy efficiency package</span><br/>
          <span className="build-reduce-resume">  ** Content of the REDUCE package TBD at DPI Audit</span>
        </div>
        <div className="build-reduce-on-off">
          <label>Reduce On/Off</label><br/>
          <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
        </div>
      </div>

    </div>

  </div>
)

export default Home;