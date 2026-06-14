import { Logo } from "../components/Logo.jsx";
import { Search } from "../components/Search.jsx";
import { Results } from "../components/Results.jsx";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <Results />
    </nav>
  );
};
