import React, { Component } from 'react';
import Template from './Template';
import { Form, Button } from 'react-bootstrap';

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
    if (this.state.value != "null"){
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicSelect">
          <Form.Label>Select Template:</Form.Label>
          <Form.Control as="select" onChange={this.handleChange}>
            <option value="null">Select</option>
            {this.props.templates.map(template => <option value={template.id}>{template.title}</option>)}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  renderTemplate = () => {
    let template;
    this.props.templates.forEach(temp => {
      if (temp.id == this.state.value){
        template = temp;
      }
    })
    return (
      <div className="template">
        <Template template={template} postSolution={this.props.postSolution} />
        {/* <button className="btn btn-link" onClick={this.handleButton}>Select Another Template</button> */}
        <Button variant="link" onClick={this.handleButton}>Select Another Template</Button>
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