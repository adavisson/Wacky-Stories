export const fetchSolutions = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_SOLUTIONS'})
    fetch('http://localhost:3001/solutions')
      .then(resp => resp.json())
      .then(solutions => {
        dispatch({type: 'ADD_SOLUTIONS', solutions: solutions})
      })
  };
}