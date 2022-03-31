import React, { useState, useEffect } from 'react';

import { search, update } from '../../API/booksApi';

import BooksList from '../../components/books-list/books-list';
import SearchBar from '../../components/searchbar/searchbar';

const SearchPage = () => {
  const [books, setBooks] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (searchInput) {
      search(searchInput).then((books) => {
        if (books.error) {
          setBooks([]);
        } else {
          setBooks(books);
        }
      });
    }
  }, [searchInput]);

  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />

      {Boolean(books.length) && <BooksList books={books} />}
    </>
  );
};
export default SearchPage;
