import React, { Component } from 'react';
import Template from './Template';

class TemplateForm extends Component {
  state = {
    value: null
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Select Template:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="null">Select</option>
              {this.props.templates.map(template => <option value={template.id}>{template.title}</option>)}
            </select>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
 
export default TemplateForm;