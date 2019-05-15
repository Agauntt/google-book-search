import React, {Component} from "react";
import API from "../Utils/API";
import { List, ListItem } from "../Components/List";
import DeleteBtn from "../Components/DeleteBtn";

class Saved extends Component {
state = {
    books: [],
    title: "",
    author: "",
    description: ""
    };
    
componentDidMount() {
    this.loadBooks();
    }

loadBooks = () => {
    console.log("Loaded");
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", description: "" })
          )
          .catch(err => console.log(err));
}

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    console.log("book ID: " + id)
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .then(console.log("Delete Successful"))
      .catch(err => console.log(err));
  };

  render() {
      return (
        <div>
        <h1 className="title">Saved Books</h1>
        {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      {/* <a href={"api/books/" + book._id}> */}
                        <strong>
                          {book.title} by {book.author} 
                          <DeleteBtn onClick={() => this.deleteBook(book._id)}/>
                        </strong>
                        <p>{book.description}</p>
                      {/* </a> */}
                      
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
      )
  }
}

export default Saved;
