import React, { Component } from 'react';

class MiFormulario extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  render(){
    return <form>
      <input type="text" OnClick={} value={this.state.email} placeholder="Email"/>
      <input type="text" OnClick={} value={this.state.password} placeholder="*******"/>
      <input type="submit" value="Iniciar" />
    </form>;
  }
}

export default MiFormulario;