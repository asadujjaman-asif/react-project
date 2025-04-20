import { createContext,useState,useContext } from "react";

type SearchContextType = {
    searchKeyword:string;
    setSearchKeyWord: (keyword:string)=>void;
}

const SearchContext = createContext<SearchContextType>({
    searchKeyword:"",
    setSearchKeyWord:()=>{}
});
export default SearchContext;

export const useSearch = () => useContext(SearchContext);