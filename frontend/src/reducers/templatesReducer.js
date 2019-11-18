const templatesReducer = (state = { templates: [], solutions: [], loading: false}, action) => {
  switch(action.type){
    case 'LOADING_TEMPLATES':
      return {
        ...state,
        templates: [...state.templates],
        solutions: [...state.solutions],
        loading: true
      }
    case 'ADD_TEMPLATES':
      return {
        ...state,
        templates: action.templates,
        solutions: [...state.solutions],
        loading: false
      }
    case 'LOADING_SOLUTIONS':
      return {
        ...state,
        templates: [...state.templates],
        solutions: [...state.solutions],
        loading: true
      }
    case 'ADD_SOLUTIONS':
      return {
        ...state,
        templates: [...state.templates],
        solutions: action.solutions,
        loading: false
      }
    case 'BUILDING_SOLUTION':
      return {
        ...state,
        templates: [...state.templates],
        solutions: [...state.solutions],
        loading: true
      }
    case 'ADD_SOLUTION':
      return {
        ...state,
        templates: [...state.templates],
        solutions: [state.solutions.push(action.solution)],
        loading: false
      }
    default:
      return state;
  }
}
 
export default templatesReducer;