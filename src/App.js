import React from 'react';
import logo from './logo.svg';
import './App.css';
import Beer from './components/Beer/Beer';

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
  beers: []
  }
}

  componentDidMount() {
    console.log('Something happend');
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(data => {
      this.setState({
        beers: data
      })
  });
}
  componentDidUpdate() {
  console.log('Beers', this.state.beers);
}

 
  render() {
    return (
      <div className="app">
        <h1 className="app_title">Pub API</h1>
        <ul className="beer_list">
          {this.state.beers.map(beer => (
            <Beer beer={beer}/> 
          ))}
          </ul>
      </div>
    );
  }
}

export default App;

