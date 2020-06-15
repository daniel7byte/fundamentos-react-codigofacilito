import React, { Component } from 'react';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles:[
        'Estoy',
        'En',
        'Rappi'
      ]
    }
  }

  render(){
    return (
      <div>
        {
          this.state.articles.map((article, index)=> {
            return <p>{index} - {article}</p>
          })
        }
      </div>
    )
  }
}

export default Blog;