import React, { Component } from 'react';
import SolutionsForm from '../components/SolutionsForm';
import { connect } from 'react-redux';
import { fetchSolutions } from '../actions/fetchSolutions';
import { fetchTemplates } from '../actions/fetchTemplates';

class SavedStoriesContainer extends Component {
  
  componentDidMount() {
    //get Templates and Solutions
    this.props.fetchTemplates();
    this.props.fetchSolutions();
  }

  render() { 
    return (
      <div>
        <SolutionsForm templates={this.props.templates} solutions={this.props.solutions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    templates: state.templates,
    solutions: state.solutions,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSolutions: () => dispatch(fetchSolutions()),
    fetchTemplates: () => dispatch(fetchTemplates())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SavedStoriesContainer);