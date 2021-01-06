import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';
import Market from './components/Market';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <h1 id = "title">Agora - Shop App</h1>
        <Market/>
      </div>
    )
  }
} 

export default inject('shop')(observer(App));
