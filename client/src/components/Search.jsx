import React from 'react';
import App from './App.jsx';

const Search = ({state, handleChange, handleSubmit}) => (
  // return a form
  <form onSubmit={handleSubmit}>
    <input type="text" value={state.value} onChange={handleChange}/>
    <input type="submit" value="Go!" />
  </form>
);

//In React, mutable state is typically kept in the state property of components, and only updated with setState().

export default Search;