import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
console.log(React);

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

// npx babel . --out-dir=compiled --presets=@babel/preset-react --ignore=node_modules,compiled --source-maps=inline --watch

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
      value: 'Search...',
      movies: movies
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('handleChange is triggering');
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('handleSubmit is triggering');
    // create a result array
    // iterate over movies
     // if the current movie title includes the search term
       // push movie to result
    // set state to result
    const foundMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(this.state.value.toLowerCase());
    });
    console.log(foundMovies);
    if (foundMovies.length === 0) {
      foundMovies.push({title: 'No movies. Sorry, Charlie!'});
    }
    this.setState({movies: foundMovies});
    event.preventDefault();
  }

  render() {
    return (
      <div className="movie-list">
        <h1 className="title">MovieList</h1>
        <div className="search-bar"><Search state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /></div>
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
  // write handleSubmit function logic
  //



