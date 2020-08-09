import React from "react";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react";
import "./App.css";

function App() {
  return <div className="App"></div>;
}

const theme = {
  ...AmplifyTheme,
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: "#ccccff",
  },
  button: {
    ...AmplifyTheme.button,
    //backgroundColor: "#ccccff",
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: "5px",
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    //backgroundColor: "#ccccff",
  },
};

export default withAuthenticator(App, true, [], null, theme);
