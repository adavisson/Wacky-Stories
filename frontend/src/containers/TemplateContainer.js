import React, { Component } from 'react';
// import Template from '../components/Template';
import TemplateForm from '../components/TemplateForm';
import { connect } from 'react-redux';
import { fetchTemplates } from '../actions/fetchTemplates';
import { postSolution } from '../actions/postSolution';

class TemplateContainer extends Component {

  componentDidMount() {
    this.props.fetchTemplates();
  }

  render() { 
    return (
      <div>
        <TemplateForm templates={this.props.templates} postSolution={this.props.postSolution} />
        {/* <Template template={this.props.templates[0]} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    templates: state.templates,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTemplates: () => dispatch(fetchTemplates()),
    postSolution: (solution) => dispatch(postSolution(solution))
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(TemplateContainer);