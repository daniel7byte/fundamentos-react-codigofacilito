import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function MiComponente(){
  return <p>Hola Mundo</p>;
}

class MiComponenteDeClase extends Component {
  render(){
    return <p>Hola desde Clase</p>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <MiComponente/>
        <MiComponenteDeClase/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
