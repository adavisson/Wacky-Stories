import React, { Component } from 'react';

class Template extends Component {
  state = {
    values: []
  }

  handleSubmit = () => {
    alert("Submitted!");
  }

  handleChange = () => {

  }

  renderForm = () => {
    {this.props.template.hints.forEach((hint, index) => console.log(hint))}
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.template.hints.map((hint, index) => {
          return (
            <div className="form-group">
              <label>{hint} &nbsp;</label>
              <input id={index} type="text" value={this.state.values[index]} />
            </div>
          )
        })}
      </form>
    )
  }

  render() { 
    return (
        <div>
        {/* {console.log(props.template)} */}
        <h2>{this.props.template.title}</h2>
        {this.renderForm()}
      </div>
    );
  }
}
 
export default Template;