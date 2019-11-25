import React, { Component } from "react";
import Story from './Story';
import { Form, Button } from 'react-bootstrap';

class Template extends Component {
  state = {
    title: "",
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
     this.setState({
       values: {...this.state.values, [event.target.id]: event.target.value}
     })
  };

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleSave = (event) => {
    event.preventDefault();
    let solution = {
      title: this.state.title,
      words: Object.values(this.state.values),
      template_id: this.props.template.id
    }
    console.log('A');
    this.props.postSolution(solution);
    console.log('B');
    alert("Saved!");
  }

  renderForm = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.props.template.hints.map((hint, index) => {
          return (
            <Form.Group>
              <Form.Label>{hint}</Form.Label>
              <Form.Control type="text" id={`word_${index}`} value={this.state.values[index]} onChange={this.handleChange} required/>
            </Form.Group>
          )
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  };

  renderStory = () => {
    return(
      <>
        <Story words={Object.values(this.state.values)} template={this.props.template} />
        <br/>
        <Form onSubmit={this.handleSave}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" value={this.state.title} onChange={this.handleTitleChange} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Story
          </Button>
        </Form>
      </>
    )
  }

  render() {
    return (
      <div>
        <h2>{this.props.template.title}</h2>
        {!this.state.isSubmitted && this.renderForm()}
        {this.state.isSubmitted && this.renderStory()}
        <br />
      </div>
    );
  }
}

export default Template;
