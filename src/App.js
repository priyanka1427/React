import React , {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state ={
     fruits : []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(names => this.setState({fruits : names}))
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.fruits.map(fruit => (
            <h1>{fruit.name}</h1>))}
            </p>
        </header>
      </div>
    );
  }
}

export default App;
