import SingleBook from "./SingleBook";

const BookList = function (props) {
  return props.books.map((book, i) => {
    return <SingleBook book={book} key={i}></SingleBook>;
  });
};

export default BookList;
