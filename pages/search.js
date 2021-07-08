import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY } from '../keys.js';
import Response from '../Response.js';

function Search({ results }) {
  console.log(results);
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

export async function getServerSideProps(context) {
  const useDummyData = true;

  const data = useDummyData
    ? Response
    : fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
