import { savingSearch } from "./searchSlice";

export const startSavingSearch = (search = "") => {

  return async (dispatch) => {

    dispatch(savingSearch(search));

  }

};
