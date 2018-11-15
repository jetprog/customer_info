import React, { Component } from 'react';
import './Home.css';

const Home = (props) => (
  <div className="main">

    <div className="body-content">
      <div class="divSpace">
        With the <b class="orange"> 24.6 kw system</b>
        <br/>Sigora will include <b class="orange">$6,000 value*</b>
        <br/>of energy efficiency which will reduce
        <br/>energy consumption by <b class="orange">12%</b>
        <br/>and save <b class="orange">$130/ month</b>, lifetime savings of <b class="orange">$17,000</b>
      </div>
      <span className="line">
        <b>_________________________________________________________________________________</b>
      </span>
      <div class="grid-container">
          <div class="grid-item"><span><b>BPI Energy Audit</b></span></div>
          <div class="grid-item">Included</div>
          <div class="grid-item"></div>
          <div class="grid-item"><input type="checkbox"/></div>

          <div class="grid-item"><span><b>Attic Spray Foam Isluation</b></span></div>
          <div class="grid-item"><span><b>SAVINGS</b> <br/>8% energy <br/>$57/month <br/>$16,000 lifetime</span></div>
          <div class="grid-item"><span><b>COST</b> <br/>$10/month <br/>$2,400</span></div>
          <div class="grid-item"><input type="checkbox"/></div>

          <div class="grid-item"><span><b>Programable Thermostat</b></span></div>
          <div class="grid-item"><span><b>SAVINGS</b> <br/>3% energy <br/>$6/month <br/>$490 lifetime</span></div>
          <div class="grid-item"><span><b>COST</b> <br/>$1/month <br/>$200</span></div>
          <div class="grid-item"><input type="checkbox"/></div>

      </div>
      <span className="line">
        ___________________________________________________________________________________
      </span>
    </div>
    <div className="image">
      <img src={require('./DownArrow.svg')} height="500" />
    </div>
    <div className="footer">

      <div className="grid-three">
        <div class="item-three"><span class="orange">Total</span></div>
        <div class="item-three"><span><b class="orange">SAVINGS</b> <br/>11% energy <br/>$63/month <br/>$16,490 lifetime</span></div>
        <div class="item-three"><span><b class="orange">COST</b> <br/>$11/month <br/>$2600</span>
        </div>
      </div>

      <div className="end">
        <div>
          <span className="resume">* $ Value is market pricing for the energy efficiency package</span><br/>
          <span className="resume">  ** Content of the REDUCE package TBD at DPI Audit</span>
        </div>
        <div className="on-off">
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