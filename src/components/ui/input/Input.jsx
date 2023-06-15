import UiSearch from "../svg__images/search/UiSearch";
import classes from "./Input.module.css"

const Input = (props) => {
  return (
    <div className={classes.input__wrapper}>
      <UiSearch style={{position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)"}}/>
      <input className={classes.input} {...props}/>
    </div>
  )
}

export default Input;