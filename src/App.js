import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ListItems from './ListItems';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'potatoes', active: false },
      { id: 2, name: 'tea', active: false },
      { id: 3, name: 'hot water', active: false },
      { id: 4, name: 'groats', active: false },
      { id: 5, name: 'water soup', active: false },
      { id: 6, name: 'bread', active: false }
    ]
  }

  orderHandler = (id) => {
    const items = this.state.items;
    items.map(item => {
      if (id === item.id) {
        item.active = !item.active
      }
      return item
    })
    this.setState({
      items
    })
  }

  render() {
    return (
      <div className="App">
        <Header items={this.state.items} />
        <ListItems menu={this.state.items} order={this.orderHandler} />
      </div>
    );
  }
}

export default App;
