import React from 'react';
//import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

const Home = () => {
  return (
    <div className="story">
      <h2>Wacky Stories</h2>
      <p>Welcome to Wacky Stories! Click <a href="/templates">here</a> to create a new story,
        or click <a href="/saved-stories">here</a> to select a saved story.</p>
    </div>
  );
}
 
export default Home;


// Live coding for Project Review:
// class Home extends Component {

//   state = {
//     inputValue: "",
//     comments: []
//   }

//   handleChange = (event) => {
//     this.setState({
//       inputValue: event.target.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({
//       comments: [...this.state.comments, this.state.inputValue],
//       inputValue: ""
//     })
//     console.log(this.state.comments);
//   }

//   render() { 
//     return (
//       <>
//         <div className="story">
//           <h2>Wacky Stories</h2>
//           <p>Welcome to Wacky Stories! Click <a href="/templates">here</a> to create a new story,
//             or click <a href="/saved-stories">here</a> to select a saved story.</p>
//         </div>
//         <div>
//           <Form onSubmit={this.handleSubmit}>
//             <Form.Group>
//               <Form.Label >Comment: </Form.Label>
//               <Form.Control type="text" onChange={this.handleChange} value={this.state.inputValue} />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Submit Comment
//             </Button>
//           </Form>
//         </div>
//         <div>
//           <ul>
//             {this.state.comments.map(comment => {
//               return <li>{comment}</li>
//             })}
//           </ul>
//         </div>
//       </>
//     );
//   }
// }
 
// export default Home;