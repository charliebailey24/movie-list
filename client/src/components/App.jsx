import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import UserInput from './UserInput.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.findMovies = this.findMovies.bind(this);
    this.addUserMovie = this.addUserMovie.bind(this);
  }

  addUserMovie(userMovie) {
    this.setState({movies: [...this.state.movies, userMovie]});
  }

  findMovies(foundMovies) {
    this.setState({movies: foundMovies});
  }

  render() {
    return (
      <div className="movie-list">
        <h1 className="title">MovieList</h1>
        <div className="user-input"><UserInput movies={this.state.movies} addUserMovie={this.addUserMovie}/></div>
        <div className="search-bar"><Search movies={this.state.movies} findMovies={this.findMovies} /></div>
        <div className="movie-list-container">
          <div><MovieList movies={this.state.movies}/></div>
        </div>
      </div>
    );
  }
}

export default App;


/*
sub-problem 1: display a list of movies from the hard coded data
  create movieList and movieListEntry components (done)
  import / export appropriately (I think done)
  pass the movies as props from App to movieList and render back on app
  add appropriate html at each component (done)
  correctly render movieList in the App component (done)
  test each step along the way to make sure working correctly (done)
  add some css to make it look nice

sub-problem 2: add a search bar
  create a search component (done)
  laying piping between search and app (done)
  inject a search bar form into App (done)
  stub out handleSubmit function on App (done)
  pass event listener to Search (done)
  test piping between listener and handler function (done)
  pass state to Search (done)
  write handleChange function and pass to Search (done)
  lift state up from Search onChange (done)

sub-problem 3: display all matches or partial matches from search submit
  write handleSubmit function logic (done)

sub-problem 4: Add input field for user to add movies
  create a user input module (done)
  lay all pathing for user input component (done)
  write handleUserChange function
  write handleUserSubmit function

-----------------------------------
Post workshop to-do:
1: refactor search to be a stateful component (done --> hit a lot of bugs)
  a: store the search text in search state (done)
  b: clear the text after seach complete (done)

*/
