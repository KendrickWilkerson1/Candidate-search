import { Link, useLocation } from "react-router-dom";
import "./nav.css"

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/SavedCandidates"
            className={currentPage === "/potential" ? "nav-link active" : "nav-link"}
          >
            Potential Canidate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
