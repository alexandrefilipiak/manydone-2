import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        HomePage. Here is the link to the
        <Link to="/doneList">Done List</Link>
      </div>
    );
  }
}
