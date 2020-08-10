import React from "react";
import { Auth, Hub } from "aws-amplify";
import { Authenticator, AmplifyTheme } from "aws-amplify-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DoneListPage from "./pages/DoneListPage";
import DonePage from "./pages/DonePage";
import Navbar from "./components/Navbar";
import "./App.css";
import { render } from "@testing-library/react";

class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    console.dir(AmplifyTheme);
    this.getUserData();
    Hub.listen("auth", this, "onHubCapsule");
  }

  getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    user ? this.setState({ user }) : this.setState({ user: null });
  };

  onHubCapsule = (capsule) => {
    console.log("capsule called");
    switch (capsule.payload.event) {
      case "signIn":
        console.log("signed in");
        this.getUserData();
        break;
      case "signUp":
        console.log("signed up");
        break;
      case "signOut":
        console.log("signed out");
        this.setState({ user: null });
        break;
      default:
        return;
    }
  };

  handleSignout = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.error("Error during sign out", err);
    }
  };

  render() {
    const { user } = this.state;
    return !user ? (
      <Authenticator theme={theme}></Authenticator>
    ) : (
      <Router>
        <>
          {/* Navigation */}
          <Navbar user={user} handleSignout={this.handleSignout} />
          {/* Routes */}
          <div className="app-container">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/doneList" component={DoneListPage} />
            <Route
              exact
              path="/done/:doneId"
              component={({ match }) => (
                <DonePage doneId={match.params.doneId} />
              )}
            />
          </div>
        </>
      </Router>
    );
  }
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

export default App;
//export default withAuthenticator(App, true, [], null, theme);
