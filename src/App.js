import logo from './logo.svg';
import './App.css';
const BooksWithAuthor = (props) => {
  return(<>
      <h3>{props.bookTitle}</h3>
      <h3>{props.author}</h3>
      </>
  )
  }
const Books = (props) => {
  return (
    <>
      <h1>{props.bookTitle}</h1>
      {props.author && <BooksWithAuthor bookTitle={props.bookTitle} author={props.author}/>}
    {/* either or work */}
      {/* {props.author ? <BooksWithAuthor bookTitle={props.bookTitle} author={props.author}/> : null} */}
    </>
  )
}
  
const App = () => {
  return (
    <div className="App">
      <Books bookTitle='Harry Potter'/>
      <Books bookTitle='Percy Jackson'/>
      <Books bookTitle='Eragon' author='Your mother'/>
    </div>
  );
}

export default App;
