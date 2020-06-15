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
            return (
              <div className="card" style={ { backgroundColor:'blue' }}>
                {article}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Blog;