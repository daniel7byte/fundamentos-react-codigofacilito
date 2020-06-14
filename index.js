import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function MiComponentePresentacion(props){
  return <p>Hola soy {props.nombre} y tengo {props.edad} años de edad</p>;
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
    let edad = 18;
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <MiComponentePresentacion nombre="Jose Daniel" edad={18}/>
        <MiComponenteDeClase/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
