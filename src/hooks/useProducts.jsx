import { useState } from "react";

export const useProducts = () => {

  const [searchContent, setSearchContent] = useState("");

  return {
    searchContent,
    setSearchContent
  };

};
