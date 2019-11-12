import React, { Component } from 'react';
import Template from '../components/Template';
import TemplateForm from '../components/TemplateForm';
import { connect } from 'react-redux';
import { fetchTemplates } from '../actions/fetchTemplates';

class TemplateContainer extends Component {

  componentDidMount() {
    this.props.fetchTemplates();
  }

  render() { 
    return (
      <div>
        <TemplateForm templates={this.props.templates} />
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
    fetchTemplates: () => dispatch(fetchTemplates())
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(TemplateContainer);