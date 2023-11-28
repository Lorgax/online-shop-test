import { useNavigate, useLocation } from "react-router";
import queryString from "query-string";
import { useForm } from "../hooks";
import { startSavingSearch } from "../store/search";
import { useDispatch } from "react-redux";

export const SearchForm = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { search = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: search
  });

  const handleSearch = (e) => {

    e.preventDefault();
    dispatch(startSavingSearch(searchText.toLowerCase().replace(" ", "-")));
    navigate(`/items?search=${searchText}`);

  };

  return (
    <>
      <form onSubmit={handleSearch} className="text-center">
        <input onChange={onInputChange} className="form-control" type="text" name="searchText" value={searchText} placeholder="Smartphones, laptops, ..." />
        <button type="submit" className={location.pathname == "/" ? "btn btn-warning fw-bold mt-3" : "d-none"}>Search</button>
      </form>
    </>
  )
} 
