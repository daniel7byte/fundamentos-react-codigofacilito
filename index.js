import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import MiFormulario from './MiFormulario';
import Contador from './Contador';
import Blog from './Blog';
import ClientRest from './ClientRest';
import './style.css';


function MiComponentePresentacion(props){
  console.log(props.children);
  return <div>
    <p>Hola soy {props.nombre} y tengo {props.edad} años de edad</p>
    <h4>{3+5*props.edad}</h4>
    {props.children}
  </div>;
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
        <MiComponentePresentacion nombre="Jose Daniel" edad={18}>
          <h1>SOY UN HIJO GRANDE!</h1>
        </MiComponentePresentacion>
        <MiComponenteDeClase/>
        <hr/>
        <MiFormulario/>
        <Contador/>
        <hr/>
        <Blog/>
        <hr/>
        <ClientRest/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
