import React, { Component, Fragment } from "react";

class InnerDashboard extends Component {
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
