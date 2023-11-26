import { Routes, Route } from "react-router-dom";
import { Search, Products, InfoProduct } from "../components";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={
          <Search />
        } />
        <Route path="/items" element={
          <Products />
        } />
        <Route path="/items/:id" element={
          <InfoProduct />
        } />
      </Routes>
    </>
  )
}
