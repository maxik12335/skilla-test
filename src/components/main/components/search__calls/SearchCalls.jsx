import Input from "../../../ui/input/Input";
import classes from "./SearchCalls.module.css"

const SearchCalls = () => {
  return (
    <div className={classes.search__calls}>
      <Input placeholder="Поиск по звонкам"/>
    </div>
  )
}

export default SearchCalls;