import React from 'react';

// const UserInput = ({state, handleUserChange, handleUserSubmit}) => (
//   // return a form
//   <form onSubmit={handleUserSubmit}>
//   <input type="text" value={state.input} onChange={handleUserChange}/>
//   <input type="submit" value="Add" />
// </form>
// )

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleUserChange(event) {
    console.log('handleUserChange triggering');
    this.setState({input: event.target.value});
  }

  handleUserSubmit(event) {
    console.log('handleUserSubmit triggering');
    // set the movies in state as the movies the user adds
    const userMovies = this.state.userMovies;
    userMovies.push({title: event.target.value}); // need to pass this value to APP
    this.setState({userMovies: userMovies}); // This doesn't work
  }

  render() {
    return (
      <form onSubmit={this.handleUserSubmit}>
        <input type="text" value={this.state.input} onChange={this.handleUserChange}/>
        <input type="submit" value="Add" />
      </form>
    );
  }
}



export default UserInput