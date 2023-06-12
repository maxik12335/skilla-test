import { useState } from "react";
import DropDownMenu from "../../../ui/drop__down__menu/DropDownMenu";
import classes from "./TopMain.module.css"

const TopMain = () => {
  const [dropDownMenuItems, setDropDownMenuItems] = useState([
    {id: 1, value: "3 дня", active: true},
    {id: 2, value: "Неделя", active: false},
    {id: 3, value: "Месяц", active: false},
    {id: 4, value: "Год", active: false},
  ])
  const [isShowDropDownMenuItems, setIsShowDropDownMenuItems] = useState(false)
  const [dropDownMenuTitle, setDropDownMenuTitle] = useState(dropDownMenuItems[0].value)

  const setDropDownMenuItemsActive = (id) => {
    const arr = [...dropDownMenuItems].map(item => item.id === id ? {...item, active: true} : {...item, active: false})
    setDropDownMenuItems([...arr])
    setIsShowDropDownMenuItems(false)
    dropDownMenuItems.forEach(item => {
      return item.id === id ? setDropDownMenuTitle(item.value) : ""
    })
  }

  const showDropDownMenuItems = () => {
    isShowDropDownMenuItems ? setIsShowDropDownMenuItems(false) : setIsShowDropDownMenuItems(true)
  }

  return (
    <div className={classes.top__main}>
      <div className={classes.balance}>
        Баланс: <span>272 ₽</span> 
        <button className={classes.balance__button}>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={classes.time__ranges}>
        <svg 
          className={classes.time__ranges__img + " " + classes.time__ranges__before}
          width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"/>
        </svg>
        <span onClick={showDropDownMenuItems}>
          <svg width="16" height="18" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z"/>
          </svg>
          {dropDownMenuTitle}
        </span>
        <svg
          className={classes.time__ranges__img + " " + classes.time__ranges__after}
          width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"/>
        </svg>

        <DropDownMenu 
          dropDownMenuItems={dropDownMenuItems}
          setDropDownMenuItemsActive={setDropDownMenuItemsActive}
          show={isShowDropDownMenuItems}
        />
        {/* <ul className={classes.select}>
          <li className={classes.option + " " + classes.option__active}>3 дня</li>
          <li className={classes.option}>Неделя</li>
          <li className={classes.option}>Месяц</li>
          <li className={classes.option}>Год</li>
        </ul> */}
      </div>
    </div>
  )
}

export default TopMain;