import { SearchForm } from "./SearchForm";

export const Search = () => {

  return (
    <>
      <main className="d-flex flex-column justify-content-center align-items-center">
        <img src="../assets/logo.png" alt="Logo principal" />
        <h1 className="fw-bold">Online Shop</h1>
        <SearchForm />
      </main>
    </>
  );

};
