import React, { useState } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";

function AlivePage() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "infiniteCharacters",
    async ({ pageParam = 1 }) =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageParam}&status=alive`
      ).then((result) => result.json()),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info.next) {
          return pages.length + 1;
        }
      },
    }
  );
  return (
    <div>
      <div id="navbar">
      <Link href='/'>
        <h1>Rick and Morty Alive Characters & Infinite Scroll</h1>
      </Link>{" "}
      <Link href='/Dead'>
        <a>Dead Characters</a>
      </Link>{" "}
      <Link href='/Alive'>
        <a>Alive Characters</a>
      </Link>{" "}
      </div>
      
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 20}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
        >
          <div className='grid-container'>
            {data?.pages.map((page) => (
              <>
                {page.results.map((character) => (
                  <article key={character.id}>
                    <img
                      src={character.image}
                      alt={character.name}
                      height={250}
                      loading='lazy'
                      width={"100%"}
                    />
                    <div className='text'>
                      <p>Name: {character.name}</p>
                      <p>Lives in: {character.location.name}</p>
                      <p>Species: {character.species}</p>
                      <i>Id: {character.id} </i>
                    </div>
                  </article>
                ))}
              </>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default AlivePage;
