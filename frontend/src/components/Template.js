import React, { Component } from "react";
import Story from './Story';

class Template extends Component {
  state = {
    isSubmitted: false,
    values: {}
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      isSubmitted: true
    })
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
                required
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
        {!this.state.isSubmitted && this.renderForm()}
        {this.state.isSubmitted && <Story words={this.state.values} template={this.props.template} />}
        {console.log(this.state)}
        <br />
      </div>
    );
  }
}

export default Template;
