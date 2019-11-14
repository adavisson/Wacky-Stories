import React, { Component } from 'react';

class Story extends Component {
  // state = {  }

  renderStory = () => {
    console.log(this.props)
    return(
      <>
      {this.props.template.story.map((string, index) => {
        if(string && this.props.words[index]){
          return(
            `${string}` + `${this.props.words[index]}`
          )
        } else {
          return(
            `${string}`
          )
        }
      })}
      </>
    )
  }

  render() { 
    return (
      <div className="story">
        <p>
          {this.renderStory()}
        </p>
      </div>
    );
  }
}
 
export default Story;