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

  handleButton = event => {
    this.setState({
      isSubmitted: false
    })
  }

  renderForm = () => {
    return (
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
    );
  }

  renderTemplate = () => {
    return (
      <div>
        <Template template_id={this.state.value} />
        <button className="btn btn-primary" onClick={this.handleButton}>Select Another Template</button>
      </div>
    )
  }

  render() { 
    return (
      <div>
        {!this.state.isSubmitted && this.renderForm()}
        {this.state.isSubmitted && this.renderTemplate()}
      </div>
    );
  }
}
 
export default TemplateForm;