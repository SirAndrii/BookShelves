import React, { useContext, useEffect } from 'react';

import Header from '../../components/headings/headingH1';
import BooksList from '../../components/books-list/books-list';
import Navigate from '../../components/nav/navigate';

import { Context } from '../../store/context';

const MainPage = () => {
  const { shelvesTitles, allBooks, books } = useContext(Context);

  useEffect(() => {
    allBooks();
  }, [allBooks]);

  return (
    <>
      <Header>My Read</Header>

      {Object.keys(shelvesTitles).map((item, index) => (
        <BooksList
          key={index}
          shelfName={item}
          shelvesTitles={shelvesTitles}
          books={books}
        />
      ))}

      <Navigate />
    </>
  );
};

export default MainPage;
