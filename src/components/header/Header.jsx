import { useState } from "react";
import classes from "./Header.module.css"
import { useEffect } from "react";
import { getDayMonth, getDateWeek, getDateMonth } from "../../utils/date";
import DateNow from "./components/date__now/DateNow";
import HeaderDataLst from "./components/header__data__list/HeaderDataLst";
import RemainingBlock from "./components/remaining__block/RemainingBlock";

const Header = () => {
  const [date, setDate] = useState({
    dayWeek: "",
    dateMonth: "",
    month: ""
  })

  useEffect(() => {
    const date = {
      "dayWeek": getDateWeek(),
      "dateMonth": getDayMonth(),
      "month": getDateMonth(),
    }

    setDate({...date})
  },[])


  return (
    <header className={classes.header}>
      <div className={classes.header__container + " " + "container"}>
        <DateNow date={date}/>
        <HeaderDataLst />
        <RemainingBlock />
      </div>
    </header>
  )
}

export default Header;