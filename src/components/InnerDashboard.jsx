import React, { Component, Fragment } from "react";
import axios from "axios";

const api = axios.create({
    baseURL: "https://opensky-network.org/api/flights/arrival?airport=EDDF&begin=1517227200&end=1517230800"
})
class InnerDashboard extends Component {
    constructor() {
        super();
        api.get('/').then(res => {
            console.log(res.data)
        })
    }
  render() {
    return (
      <Fragment>
        <div className=" p-20">
            <ul className="flex justify-between">
                <li>AIRPORT</li>
          
                <li>TIME</li>
           
            
                <li>Arriving</li>

            
            <li>Departing</li>
            </ul>
        </div>
      </Fragment>
    );
  }
}
export default InnerDashboard;
