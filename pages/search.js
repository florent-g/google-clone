import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

function Search() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      {/** Header*/}
      <Header></Header>
      {/** Search Results*/}
    </div>
  );
}

export default Search;

export async function getServerSideProprs(context) {
  const useDummyData = false;
}
