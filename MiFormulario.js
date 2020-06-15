import React, { Component } from 'react';

class MiFormulario extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  syncChanges = (value, property) => {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submitForm = () => {
    console.log(this.state);
  }

  render(){
    return <form>
      <input type="text" onChange={(ev)=>{this.syncChanges(ev.target.value, 'email')}} value={this.state.email} placeholder="Email"/>
      <input type="text" onChange={(ev)=>{this.syncChanges(ev.target.value, 'password')}} value={this.state.password} placeholder="*******"/>
      <input onClick={this.submitForm} type="submit" value="Iniciar" />
    </form>;
  }
}

export default MiFormulario;