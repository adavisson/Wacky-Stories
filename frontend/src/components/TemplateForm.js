import React, { Component } from 'react';
import Template from './Template';

class TemplateForm extends Component {
  state = {
    value: null,
    isSubmitted: false
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value){
      this.setState({
        isSubmitted: true
      })
    }
  }

  renderTemplate = () => {
    return <Template template_id={this.state.value} />
  }

  render() { 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Select Template: &nbsp;
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="null">Select</option>
              {this.props.templates.map(template => <option value={template.id}>{template.title}</option>)}
            </select>
          </label>
          <br/>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
        {this.state.isSubmitted && this.renderTemplate()}
      </div>
    );
  }
}
 
export default TemplateForm;