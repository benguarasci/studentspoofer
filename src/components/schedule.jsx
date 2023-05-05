
import React, { Component } from 'react';
import { Box, Grid } from "@mui/material";
import "./base.css";
import Header from './header';

class Schedule extends Component {

    render() {
        return (
        <Box className="App">
          <div className="nav"></div>
            <Box className="App-body">
              
              <h1 className="schedule-header">My Courses</h1>
              <form action="/action_page.php">
                <select className="term-select">
                  <option>Current Term</option>
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
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
              </table>
              </div>

            <a className="link">Back to Student services</a>

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

export default Schedule;