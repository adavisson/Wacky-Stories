import React, { Component } from 'react';
import SolutionsForm from '../components/SolutionsForm';
import { connect } from 'react-redux';
import { fetchSolutions } from '../actions/fetchSolutions';

class SavedStoriesContainer extends Component {
  
  componentDidMount() {
    this.props.fetchSolutions();
  }

  render() { 
    return (
      <div>
        <SolutionsForm solutions={this.props.solutions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    solutions: state.solutions,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSolutions: () => dispatch(fetchSolutions())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SavedStoriesContainer);