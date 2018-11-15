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
        <b>__________________________________________________________________________________</b>
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
        ____________________________________________________________________________________
      </span>
    </div>
    <div className="image">
      <img src={require('./DownArrow.svg')} height="500" />
    </div>
    <div className="footer">ok</div>

  </div>
)

export default Home;