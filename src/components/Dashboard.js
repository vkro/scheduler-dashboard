import React, { Component } from "react";

import classnames from "classnames";

class Dashboard extends Component {
  render() {
    state = { loading: true };


    const dashboardClasses = classnames("dashboard");

    return <main className={dashboardClasses} />;
  }
}

export default Dashboard;
