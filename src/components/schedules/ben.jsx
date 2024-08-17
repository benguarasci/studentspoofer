
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "../base.css";
import Header from '../header';

class Ben extends Component {

    render() {
        return (
        <Box className="App">
          <div className="nav">

          </div>
            <Box className="App-body">
            <p>Benjamin Thomas Guarasci</p>

            
              <h1 className="schedule-header">My Courses</h1>
              <form action="/action_page.php">
                <select className="term-select">
                  <option>Current Term: May - Aug 2024</option>
                  <option>First Term: Sep - Dec 2024</option>
                  <option>Second Term: Jan - Apr 2025</option>
                  <option>Summer Term: May - Aug 2025</option>
                </select>
              </form>
              <h2 className="sub1"> Courses I'm Enrolled in</h2>
              <div className="table-container">
              <table>
                <tr>
                  <th>Course-Section</th>
                  <th>Schedule Times</th>
                  <th>Status</th>
                  <th>Prof/Instructor</th>
                  <th>CRN</th>
                  <th>Start/End Date</th>
                  <th>Credit Hours</th>
                </tr>
                <tr>
                  <td>ENGR 004-W01</td>
                  <td>-</td>
                  <td>**Registered**</td>
                  <td>-</td>
                  <td>13559</td>
                  <td>Mon Sep 05, 2024 - Friday Dec 04, 2024</td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <td>SENG 360 - A02 Lecture</td>
                  <td>Mon, Wed, Thu :1530 - 1620</td>
                  <td>**Web Registered**</td>
                  <td>Paula Fierra</td>
                  <td>13141</td>
                  <td>Mon Sep 05, 2024 - Friday Dec 04, 2024</td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <td>SENG 360 - A02 Lab</td>
                  <td>Wed :1230 - 1420</td>
                  <td>**Web Registered**</td>
                  <td>-</td>
                  <td>13144</td>
                  <td>Mon Sep 05, 2024 - Friday Dec 04, 2024</td>
                  <td>0</td>
                </tr>
                
                
              </table>
              </div>

            <a className="link" href='https://www.uvic.ca/tools/index.php'>Back to Student services</a>

            <h3 className="sub2">Frequent Student Links:</h3>

            <a className="link">Brightspace</a>
            <br></br>
            <a className="link">Learn Anywhere</a>
            <br></br>
            <a className="link">Holds and Alerts</a>
            <br></br>
            <a className="link">Current and past schedules</a>
            <br></br>
            <a className="link">Exam Info</a>
            <br></br>
            <a className="link">Grades</a>
            <br></br>
            <a className="link">Registration Status</a>
            <br></br>
            <a className="link">Manage Rgistration</a>
            <br></br>
            <a className="link">Account Balances</a>
            <br></br>
            <a className="link">Course Experience Surveys</a>



            </Box>
          </Box>
        );
    }
}

export default Ben;