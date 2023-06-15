import classes from "./PostItem.module.css"

const DefaultPostItem = (props) => {
    return (
      <li className={classes.posts__list__item}>
        <ul className={classes.posts__list__li}>
          <li className={classes.posts__list__item__li}>Тип</li>
          <li className={classes.posts__list__item__li}>Время</li>
          <li className={classes.posts__list__item__li}>Сотрудник</li>
          <li className={classes.posts__list__item__li}>Звонок</li>
          <li className={classes.posts__list__item__li}>Источник</li>
          <li className={classes.posts__list__item__li}>Оценка</li>
          <li className={classes.posts__list__item__li}>Длительность</li>
        </ul>
      </li>
    )
}

export default DefaultPostItem;