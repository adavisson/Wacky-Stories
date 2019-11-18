import React, { Component } from "react";
import Story from './Story';

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
      title: [event.target.value]
    })
  }

  handleSave = (event) => {
    event.preventDefault();
    let solution = {
      title: [this.state.title],
      words: [this.state.values],
      template_id: [this.props.template.id]
    }
    this.props.postSolution(solution);
    alert("Saved!");
  }

  renderForm = () => {
    return (
      <form className="form-div" onSubmit={this.handleSubmit}>
        {this.props.template.hints.map((hint, index) => {
          return (
            <div className="form-group">
              <label>{hint} &nbsp;</label>
              <input
                className="form-control"
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

  renderStory = () => {
    return(
      <>
        <Story words={Object.values(this.state.values)} template={this.props.template} />
        <br/>
        <form className="form-div" onSubmit={this.handleSave}>
          <div className="form-group">
            <label>Title: </label>
            <input type="text" className="form-control" value={this.state.title} onChange={this.handleTitleChange} required />
          </div>
          <input type="submit" value="Save Story" className="btn btn-primary" />
        </form>
      </>
    )
  }

  render() {
    return (
      <div>
        {/* {console.log(props.template)} */}
        <h2>{this.props.template.title}</h2>
        {!this.state.isSubmitted && this.renderForm()}
        {this.state.isSubmitted && this.renderStory()}
        {console.log(this.state)}
        <br />
      </div>
    );
  }
}

export default Template;
