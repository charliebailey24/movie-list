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

// const App = (props) => {
//   console.log(movies);

//   return (
//     <div className="movie-list">
//       <h1 className="title">MovieList</h1>
//       <div className="search-bar"><Search /></div>
//       <div className="movie-list-container">
//         <div><MovieList movies={movies}/></div>
//       </div>
//     </div>
//   );
//   // return (<div>Hello world!</div>);
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    };
    this.populateMovies = this.populateMovies.bind(this);
  }

  // handleUserChange(event) {
  //   console.log('handleUserChange triggering');
  //   this.setState({input: event.target.value});
  // }

  // handleUserSubmit(event) {
  //   console.log('handleUserSubmit triggering');
  //   // set the movies in state as the movies the user adds
  //   const userMovies = this.state.userMovies;
  //   userMovies.push({title: event.target.value});
  //   this.setState({userMovies: userMovies}); // ENDED HERE! This doesn't work
  // }

  addUserMovie(movie) {
    this.setState()
  }

  populateMovies(foundMovies) {
    console.log('populateMovies is triggering');
    this.setState({movies: foundMovies});
    event.preventDefault();
  }

  render() {
    return (
      <div className="movie-list">
        <h1 className="title">MovieList</h1>
        <div className="user-input"><UserInput state={this.state} handleUserChange={this.handleUserChange} handleUserSubmit={this.handleUserSubmit} /></div>
        <div className="search-bar"><Search cb={this.populateMovies} /></div>
        <div className="movie-list-container">
          <div><MovieList movies={this.state.movies}/></div>
        </div>
      </div>
    );
  }
}

export default App;

// sub-problem 1: display a list of movies from the hard coded data
  // create movieList and movieListEntry components (done)
  // import / export appropriately (I think done)
  // pass the movies as props from App to movieList and render back on app
  // add appropriate html at each component (done)
  // correctly render movieList in the App component (done)
  // test each step along the way to make sure working correctly (done)
  // add some css to make it look nice

// sub-problem 2: add a search bar
  // create a search component (done)
  // laying piping between search and app (done)
  // inject a search bar form into App (done)
  // stub out handleSubmit function on App (done)
  // pass event listener to Search (done)
  // test piping between listener and handler function (done)
  // pass state to Search (done)
  // write handleChange function and pass to Search (done)
  // lift state up from Search onChange (done)

// sub-problem 3: display all matches or partial matches from search submit
  // write handleSubmit function logic (done)

// sub-problem 4: Add input field for user to add movies
  // create a user input module (done)
  // lay all pathing for user input component (done)
  // write handleUserChange function
  // write handleUserSubmit function

/*
Post workshop to-do:
1: refactor search to be a stateful component
  a: store the search text in search state
  b: clear the text after seach complete


*/
