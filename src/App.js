import React, { Component } from 'react';
import './App.css';
import { getOne, getTwo, getThree, getFour, cancelThree, cancelFour } from './api'

class App extends Component {

  constructor() {
    super();
    this.state = { content: null, content2: false }
  }

  fetchOne = () => {
    getOne().then((content) => this.setState({ content }))
  }

  fetchTwo = () => {
    getTwo().then((content) => this.setState({ content }))
  }

  fetchThree = () => {
    cancelFour()
    getThree().then((content) => this.setState({ content }))
  }

  fetchFour = () => {
    cancelThree()
    getFour().then((content) => this.setState({ content }))
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Cancel Promise</h2>
          <p>When you hit tab1, then tab2; tab1 content loads first, then gets overwritten by tab2 content</p>
          <p>When you hit tab3, then tab4; promise for tab3 content is cancelled and tab4 content is loaded</p>
        </div>
        <div style={{ display: 'float' }}>
          <button onClick={this.fetchOne}>Tab 1</button>
          <button onClick={this.fetchTwo}>Tab 2</button>
          <button onClick={this.fetchThree}>Tab 3</button>
          <button onClick={this.fetchFour}>Tab 4</button>
        </div>
        <div>
          {this.state.content}
        </div>
      </div>
    );
  }
}

export default App;
