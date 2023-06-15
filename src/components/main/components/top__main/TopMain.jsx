import { useEffect, useState } from "react";
import DropDownMenu from "../../../ui/drop__down__menu/DropDownMenu";
import classes from "./TopMain.module.css"
import TopMainSvg from "../../../ui/svg__images/top__main/TopMainSvg";

const TopMain = ({setStartDate}) => {
  const [dropDownMenuItems, setDropDownMenuItems] = useState([
    {id: 1, value: "3 дня", active: true},
    {id: 2, value: "Неделя", active: false},
    {id: 3, value: "Месяц", active: false},
    {id: 4, value: "Год", active: false},
  ])
  const [isShowDropDownMenuItems, setIsShowDropDownMenuItems] = useState(false)
  const [dropDownMenuTitle, setDropDownMenuTitle] = useState(dropDownMenuItems[0].value)

  useEffect(() => {
    const id = [...dropDownMenuItems].filter(item => item.active)[0].id
    if(id === 1) {
      setStartDate({y: 0, m: 0, n: 0, d: 3})
    } else if (id === 2) {
      setStartDate({y: 0, m: 0, n: 2, d: 0})
    } else if (id === 3) {
      setStartDate({y: 0, m: 1, n: 0, d: 0})
    } else if (id === 4) {
      setStartDate({y: 1, m: 0, n: 0, d: 0})
    }
  }, [dropDownMenuItems])

  const setDropDownMenuItemsActive = (id) => {
    const arr = [...dropDownMenuItems].map(item => item.id === id ? {...item, active: true} : {...item, active: false})
    setDropDownMenuItems([...arr])
    setIsShowDropDownMenuItems(false)
    setTitle(id)
  }

  const showDropDownMenuItems = () => {
    isShowDropDownMenuItems ? setIsShowDropDownMenuItems(false) : setIsShowDropDownMenuItems(true)
  }

  const setRangeLeft = () => {
    let id = dropDownMenuItems.filter(item => item.active)[0].id - 1

    if(id <= 0) {
      id = dropDownMenuItems.length
    }

    setDropDownMenuItems([...dropDownMenuItems].map(item => {
      return item.id === id ? {...item, active: true} : {...item, active: false}
    }))

    setTitle(id)
    setIsShowDropDownMenuItems(false)
  }

  const setRangeRight = () => {
    let id = dropDownMenuItems.filter(item => item.active)[0].id + 1
    
    if(id > 4) {
      id = 1
    }

    setDropDownMenuItems([...dropDownMenuItems].map(item => {
      return item.id === id ? {...item, active: true} : {...item, active: false}
    }))

    setTitle(id)
    setIsShowDropDownMenuItems(false)
  }

  const setTitle = (id) => {
    dropDownMenuItems.forEach(item => {
      return item.id === id ? setDropDownMenuTitle(item.value) : ""
    })
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
        <TopMainSvg
          onClick={setRangeLeft}
          cl={classes.time__ranges__before}
        />

        <span onClick={showDropDownMenuItems}>
          <svg width="16" height="18" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z"/>
          </svg>
          {dropDownMenuTitle}
        </span>

        <TopMainSvg
          onClick={setRangeRight}
          cl={classes.time__ranges__after}
        />

        <DropDownMenu 
          dropDownMenuItems={dropDownMenuItems}
          setDropDownMenuItemsActive={setDropDownMenuItemsActive}
          show={isShowDropDownMenuItems}
        />
      </div>
    </div>
  )
}

export default TopMain;