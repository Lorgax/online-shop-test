import { useForm } from "../hooks";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import { startSavingSearch } from "../store/search/thunks";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { search = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: search
  });

  const dispatch = useDispatch();

  const handleSearch = (e) => {

    e.preventDefault();

    dispatch(startSavingSearch(searchText.toLowerCase().replace(" ", "-")));

    navigate(`/items?search=${searchText}`);

  };

  return (
    <>
      <main className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold">Online Shop</h1>
        <form onSubmit={handleSearch} className="text-center">
          <input onChange={onInputChange} className="form-control" type="text" name="searchText" value={searchText} placeholder="Smartphones, laptops, ..." />
          <button type="submit" className="btn btn-warning fw-bold mt-3">Buscar</button>
        </form>
      </main>
    </>
  );

};
