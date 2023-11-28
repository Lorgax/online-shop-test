import { Link } from "react-router-dom";
import { SearchForm } from "./SearchForm";

export const SearchBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid d-flex align-items-center justify-content-around">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="/src/assets/logo.png" alt="Logo principal" />
          </Link>
          <SearchForm />
        </div>
      </nav>
    </>
  )
}
