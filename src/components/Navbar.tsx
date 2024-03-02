import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <div className="header__container container">
        <Link className="logo" to="/">
          MyNews
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/create">Create</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
