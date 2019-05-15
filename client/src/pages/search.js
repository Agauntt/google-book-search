import React, {Component} from "react";
import {Input, FormBtn} from "../Components/Form";

class Search extends Component {

render() {
  return (
    <div>
      <h1 className="title">Search for new books</h1>
      <form className="search-field"> 
        <Input id="search" name="title" placeholder="Title (required)" /> 
        <FormBtn>Search</FormBtn>
      </form>

    </div>
  );
}
}

export default Search;
