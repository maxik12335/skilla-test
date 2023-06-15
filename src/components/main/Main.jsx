import { useState } from "react";
import classes from "./Main.module.css"
import Filters from "./components/filters/Filters";
import PostsList from "./components/posts__list/PostsList";
import SearchCalls from "./components/search__calls/SearchCalls";
import TopMain from "./components/top__main/TopMain";

const Main = () => {
  const [startDate, setStartDate] = useState({
    y: 0,
    m: 0,
    n: 0,
    d: 3
  })

  const [stateFilterCallType, setStateFilterCallType] = useState(2)

  const filterCallType = (id, filterId) => {
    if(id === 1) {
      setStateFilterCallType(2)
    } else if (id === 2) {
      setStateFilterCallType(1)
    } else if (id === 3) {
      setStateFilterCallType(0)
    }
  }
  
  return (
    <main className={classes.main}>
      <div className="container">
        <TopMain setStartDate={setStartDate}/>
        <div className={classes.main__filter}>
          <SearchCalls />
          <Filters filterCallType={filterCallType}/>
        </div>

        <PostsList startDate={startDate} stateFilterCallType={stateFilterCallType}/>
      </div>
    </main>
  )
}

export default Main;