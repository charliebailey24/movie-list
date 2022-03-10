import React from 'react';

const UserInput = ({state, handleUserChange, handleUserSubmit}) => (
  // return a form
  <form onSubmit={handleUserSubmit}>
  <input type="text" value={state.input} onChange={handleUserChange}/>
  <input type="submit" value="Add" />
</form>
)
export default UserInput