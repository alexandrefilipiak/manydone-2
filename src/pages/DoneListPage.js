import React, { Component } from "react";
import NewDone from "../components/NewDone";
import DoneList from "../components/DoneList";

export default class DoneListPage extends Component {
  render() {
    return (
      <>
        <NewDone />
        <DoneList />
      </>
    );
  }
}
