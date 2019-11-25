export const postSolution = (solution) => {  // acbd  
  console.log('C');
  return dispatch => {
    dispatch({type: 'BUILDING_SOLUTION'});
    let configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(solution)
    }
    fetch('http://localhost:3001/solutions', configObject)
      .then(resp => resp.json())
      .then(solution => {
        console.log('D');
        dispatch({type: 'ADD_SOLUTION', solution: solution})
      })
  };
  console.log('E');
}


// let phrase = {
    // content: this.content
  // };
// 
  // let configObject = {
    // method: "POST",
    // headers: {
      // "Content-Type": "application/json"
    // },
    // body: JSON.stringify(phrase)
  // };
// 
  // return fetch(`${PHRASES_URL}`, configObject)
    // .then(resp => resp.json())
    // .then(json => {
      // this._id = json.id;
      // PHRASES.push(this);
    // })
    // .then();
    // 
// export const fetchSolutions = () => {
//   return (dispatch) => {
//     dispatch({type: 'LOADING_SOLUTIONS'})
//     fetch('http://localhost:3001/solutions')
//       .then(resp => resp.json())
//       .then(solutions => {
//         dispatch({type: 'ADD_SOLUTIONS', solutions: solutions})
//       })
//   };
// }