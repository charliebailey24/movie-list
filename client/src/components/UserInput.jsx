import React from 'react';

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
    this.setState({input: event.target.value});
  }

  handleUserSubmit(event) {
    event.preventDefault();

    var userMovie = {title: this.state.input};

    fetch('/api/movies/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userMovie),
    })
    .then((res) => {res.json()})
    .then((data) => {
      console.log('Success: ', data);
      this.props.addUserMovie(userMovie);
    })
    .catch((error) => {
      console.error('Error: ', error);
    });

    // this.props.addUserMovie(userMovie);
    this.setState({input: ''});
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