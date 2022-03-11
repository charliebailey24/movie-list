import React from 'react';
import App from './App.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const foundMovies = this.props.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(this.state.query.toLowerCase());
    });
    if (foundMovies.length === 0) {
      foundMovies.push({title: 'No movies. Sorry, Charlie!'});
    }
    this.props.findMovies(foundMovies);
    this.setState({query: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.query} onChange={this.handleChange}/>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default Search;



