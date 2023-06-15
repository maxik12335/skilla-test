import classes from "./DropDownMenu.module.css"

const DropDownMenu = ({dropDownMenuItems, setDropDownMenuItemsActive, show, filterId = null}) => {
  return (  
    <ul className={show ? classes.select + " " + classes.show : classes.select}>
      {
        dropDownMenuItems.map(item => 
          <li 
            key={item.id}
            onClick={() => setDropDownMenuItemsActive(item.id, filterId=null || filterId)}
            className={item.active ? classes.option + " " + classes.option__active : classes.option}
          >
            {item.value}
          </li>
        )
      }
    </ul>
  )
}

export default DropDownMenu;