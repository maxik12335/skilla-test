import { useEffect, useState } from "react";
import classes from "./Navigation.module.css"
import { getListNavData } from "./utils/getNav";

const Navigation = () => {
  const [nav, setNav] = useState(getListNavData())

  const onClickNav = (id) => {
    let mapArr = [...nav].map(item => {
      return item.id === id ? {...item, active: true}: {...item, active: false}
    })

    console.log(mapArr)
    setNav(mapArr)
  }

  return (
    <nav className={classes.navigation}>
      <ul className={classes.navigation__list}>
        {
          nav.map(item => (
            <li 
              onClick={() => onClickNav(item.id)}
              key={item.id}
              className={
                item.active ? 
                classes.navigation__list__item + " " + classes.navigation__list__item__active : classes.navigation__list__item
              }
            >
              <div className={classes.navigation__list__item__box__img}>
                <img 
                  className={classes.navigation__list__item__img}
                  src={item.active ? item.imgActive : item.img}
                  alt={item.title}
                />
              </div>
              <p className={
                item.active ?
                classes.navigation__list__item__title + " " + classes.navigation__list__item__title__active : 
                classes.navigation__list__item__title
              }
              >{item.title}</p>
              {item.active && <div className={classes.navigation__list__item__round}></div>}
              {item.active && <div className={classes.navigation__list__item__border}></div>}
            </li>   
          ))
        }
      </ul>
    </nav>
  )
}

export default Navigation;