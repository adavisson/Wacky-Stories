import React, { Component } from 'react';

class TemplateForm extends Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.value);
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Select Template:
          <select value={this.state.value} onChange={this.handleChange}>
            {this.props.templates.map(template => <option value={template.title}>{template.title}</option>)}
          </select>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default TemplateForm;