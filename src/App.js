import React, { Component } from 'react';
import Home from './containers/Home';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/createStore';

import './App.css';

class App extends Component {
  state = {
    toDashboard: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      password: null
    };

  }
  render() {
    console.log('props: ', this, this.props);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App" >
            <Home />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
