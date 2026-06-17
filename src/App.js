import { useEffect, useState } from "react";

import { Navbar } from "./layout/Navbar";
import { Main } from "./layout/Main";

import { Logo } from "./components/Logo.jsx";
import { Search } from "./components/Search.jsx";
import { Results } from "./components/Results.jsx";

import { Box } from "./layout/Box.jsx";
import { MovieList } from "./components/MovieList.jsx";
import { WatchedSummary } from "./components/WatchedSummary.jsx";
import { WatchedMovieList } from "./components/WatchedMovieList.jsx";
import { Loader } from "./components/Loader.jsx";
import { ErrorMessage } from "./components/ErrorMessage.jsx";
import { MovieDetails } from "./components/MovieDetails.jsx";
import { useMovies } from "./hooks/useMovies.jsx";
import { useLocalStorageState } from "./hooks/useLocalStorageState.jsx";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useLocalStorageState([], "watched");
  const { movies, isLoading, error } = useMovies(query);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Results movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
