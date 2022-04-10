import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
// import NotFound from "./404";
import InnerDashboard from "./InnerDashboard";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul className="flex justify-end">
          {/* <li>
            <Link to={`${match.path}`}>Dashboard</Link>
          </li> */}
         
          <li className="px-10">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
        <main role="main">
          <div className="main">
            <Switch>
              
              <Route exact path={`${match.path}`}>
                <InnerDashboard />
              </Route>
              {/* <Route path="*">
                <NotFound />
              </Route> */}
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Dashboard);
