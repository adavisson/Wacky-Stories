import React, { Component } from 'react';

class SolutionsForm extends Component {
  state = {
    value: null,
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
      <form className="solutionsForm" onSubmit={this.handleSubmit}>
        <label>Select Solution: &nbsp;
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="null">Select</option>
            {this.props.solutions.map(solution => <option value={solution.id}>{solution.title}</option>)}
          </select>
        </label>
        <br/>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    )
  }

  renderStory = () => {
    return (
      <div>
        <h2>Story</h2>
        <button className="btn btn-link" onClick={this.handleButton}>Select Another Solution</button>
      </div>
    )
  }

  render() { 
    console.log(this.props.solutions)
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