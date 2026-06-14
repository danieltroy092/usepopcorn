import { ListBox } from "./ListBox";
import { WatchedBox } from "./WatchedBox";

export const Main = ({ movies }) => {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
};
