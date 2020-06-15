import React, { Component } from 'react';

class ClientRest extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles:[]
    }
  }

  componentDidMount(){
    console.log("Ya!");
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');
    promesa.then((response) => {
      response.json().then((data) => {
        this.setState({
          articles: data
        })
      })
    })
    console.log("Yo!");
  }

  render(){
    return (
      <div>
        {
          this.state.articles.map((article)=> {
            return <p>{article.title}</p>
          })
        }
      </div>
    )
  }
}

export default ClientRest;