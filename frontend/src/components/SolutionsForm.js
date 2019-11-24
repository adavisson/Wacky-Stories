import React, { Component } from 'react';
import Story from './Story';
import { Form, Button } from 'react-bootstrap';

class SolutionsForm extends Component {
  state = {
    value: "null",
    isSubmitted: false
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.value != "null"){
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
          <Form.Label>Select Solution:</Form.Label>
          <Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
            <option value="null">Select</option>
            {this.props.solutions.map(solution => <option value={solution.id}>{solution.title}</option>)}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }

  renderStory = () => {
    let temp = null;
    let sol = null;

    this.props.solutions.forEach(solution => {
      if(solution.id == this.state.value){
        sol = solution;
      }
    })

    this.props.templates.forEach(template => {
      if(template.id == sol.template_id){
        temp = template;
      }
    })

    return (
      <div>
        <Story template={temp} words={sol.words} />
        <br/>
        <button className="btn btn-link" onClick={this.handleButton}>Select Another Solution</button>
      </div>
    )
  }

  render() { 
    return (
      <div>
        <h2>Saved Stories</h2>
        {!this.state.isSubmitted && this.renderForm()}
        {this.state.isSubmitted && this.renderStory()}
      </div>
    );
  }
}
 
export default SolutionsForm;