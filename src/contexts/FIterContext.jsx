import { createContext, useState, useContext } from "react";
import { dummydata } from "../data"; // Shop Page Data
import { grocData } from "../groceory";
import { category } from "../Category";
import { grocCate } from "../grocCat";


export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [categ, setcateg] = useState([])
  const [unfilter, setUnfilter] = useState([])
  const [input,setInput]=useState("")
 

  const setPage = (page) => {
    switch (page) {
      case "grocery": {
        setItems(grocData)
        setcateg(grocCate)
        setUnfilter(grocData)
        break;
      }
      case "shop": {
        setItems(dummydata)
        setcateg(category)
        setUnfilter(dummydata)
        break;
      }
      default: {
        setItems([])
        setUnfilter([])
        break;
      }
    }
  }

  const filterCategory = (category) => {
    if (category === "All") setItems([...unfilter])

    else{
      let updateData = unfilter.filter((item) => item.category === category)

    setItems(updateData)
    }

  }

  


  return (
    <FilterContext.Provider value={{ setPage, filterCategory,  items, categ ,input,setInput }}>
      {children}
    </FilterContext.Provider>
  );

}


export default FilterProvider

export const useFilter = () => useContext(FilterContext);
