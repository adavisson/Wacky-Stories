import React, { Component } from "react";

class Template extends Component {
  state = {
    values: {}
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("Submitted!");
  };

  handleChange = event => {
    console.log(event.target.key)
     this.setState({
       values: {...this.state.values, [event.target.id]: event.target.value}
     })
  };

  renderForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.template.hints.map((hint, index) => {
          return (
            <div className="form-group">
              <label>{hint} &nbsp;</label>
              <input
                id={`word_${index}`}
                type="text"
                value={this.state.values[index]}
                onChange={this.handleChange}
              />
            </div>
          );
        })}
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    );
  };

  render() {
    return (
      <div>
        {/* {console.log(props.template)} */}
        <h2>{this.props.template.title}</h2>
        {this.renderForm()}
        {console.log(this.state)}
        <br />
      </div>
    );
  }
}

export default Template;
