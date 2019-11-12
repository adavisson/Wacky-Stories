const fetchTemplates = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_TEMPLATES'})
    fetch('http://localhost:3000/templates')
      .then(resp => resp.json())
      .then(templates => {
        dispatch({type: 'ADD_TEMPLATES', templates: templates})
      });
  };
}
 
export default fetchTemplates;