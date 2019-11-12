const templatesReducer = (state = { templates: [], loading: false}, action) => {
  switch(action.type){
    case 'LOADING_TEMPLATES':
      return {
        ...state,
        templates: [...state.templates],
        loading: true
      }
    case 'ADD_CATS':
      return {
        ...state,
        templates: action.templates,
        loading: false
      }
    default:
      return state;
  }
}
 
export default templatesReducer;