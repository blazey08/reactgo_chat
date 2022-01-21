import React, { Component } from "react";
import { connect, sendMsg } from "./api";
import Header from "./components/Header"
import ChatHistory from "./components/ChatHistory";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message");

      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))

      console.log(this.state);
    });
  }

  send(){
    console.log("hello");
    sendMsg("hello");
  }

  render(){
    return(
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />

        {/* Running send function in this class */}
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
