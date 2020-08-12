import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createDone } from "../graphql/mutations";

// prettier-ignore
import { Form, Button, Dialog, Input, Select, Notification } from 'element-react'

import { UserContext } from "../App";

export default class NewDone extends Component {
  state = {
    name: "",
    addDoneDialog: false,
  };

  handleAddDone = async (user) => {
    try {
      console.log(this.state.name);
      this.setState({ addDoneDialog: false });
      const input = {
        name: this.state.name,
        owner: user.usernmae,
      };
      const result = await API.graphql(graphqlOperation(createDone, { input }));
      console.log(`Created Done: id ${result.data.createDone.id}`);
      this.setState({ name: "" });
    } catch (err) {
      console.error("Error adding new done", err);
      Notification.error({
        title: "Error",
        message: `${err.message || "Error adding done"}`,
      });
    }
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <>
            <div className="market-header">
              <h1 className="market-title">
                Create your done
                <Button
                  type="text"
                  icon="edit"
                  className="market-title-button"
                  onClick={() => this.setState({ addDoneDialog: true })}
                />
              </h1>
            </div>

            <Dialog
              title="Create new done"
              visible={this.state.addDoneDialog}
              onCancel={() => this.setState({ addDoneDialog: false })}
              size="large"
              customClass="dialog"
            >
              <Dialog.Body>
                <Form labelPosition="top">
                  <Form.Item label="Add Done Name">
                    <Input
                      placeholder="Done Name"
                      trim={true}
                      onChange={(name) => this.setState({ name })}
                      value={this.state.name}
                    />
                  </Form.Item>
                </Form>
              </Dialog.Body>
              <Dialog.Footer>
                <Button onClick={() => this.setState({ addDoneDialog: false })}>
                  Cancel
                </Button>
                <Button
                  type="primary"
                  disabled={!this.state.name}
                  onClick={() => this.handleAddDone(user)}
                >
                  Add
                </Button>
              </Dialog.Footer>
            </Dialog>
          </>
        )}
      </UserContext.Consumer>
    );
  }
}
