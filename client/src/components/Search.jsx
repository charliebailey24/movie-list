import React from 'react';
import App from './App.jsx';

// const Search = ({state, handleChange, handleSubmit}) => (
//   // return a form
//   <form onSubmit={handleSubmit}>
//     <input type="text" value={state.value} onChange={handleChange}/>
//     <input type="submit" value="Go!" />
//   </form>
// );

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'Search...'
    }

    // ended here with error on bind this reference
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  // NOT TRIGGERING! Ended here.
  handleSubmit(event) {
    // create a result array
    // iterate over movies
     // if the current movie title includes the search term
       // push movie to result
    // set state to result
    console.log('handleSubmit triggering');
    const foundMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(this.state.query.toLowerCase());
    });
    console.log(foundMovies);
    if (foundMovies.length === 0) {
      foundMovies.push({title: 'No movies. Sorry, Charlie!'});
    }
    props.cb(foundMovies);
  }

  render() {
    return (
      // need to change to form handler functions here
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.query} onChange={this.handleChange}/>
        <input type="submit" value="Go!" />
      </form>
    )
  }
}

//In React, mutable state is typically kept in the state property of components, and only updated with setState().

export default Search;