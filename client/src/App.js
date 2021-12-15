import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-next-table/dist/SmartTable.css';
import ListData from './components/list';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ListData />
        <span>Nokia homework</span>
      </div>
    );
  }
}

export default App;