import classes from "./RemainingBlock.module.css"

const RemainingBlock = () => {
  return (
    <div className={classes.remaining__block}>
      <img className={classes.search} src="assets/images/icons/search.svg" alt="" />
      <div className={classes.people__name}>
        ИП Сидорова Александра Михайловна
        <img className={classes.people__arrow} src="assets/images/icons/arrow-down.svg" alt="" />
      </div>
      <div className={classes.people__img__wrapper}>
        <img className={classes.people__img} src="assets/images/peoples/people-1.jpg" alt="" />
        <img className={classes.people__arrow} src="assets/images/icons/arrow-down.svg" alt="" />
      </div>
    </div>
  )
}

export default RemainingBlock;