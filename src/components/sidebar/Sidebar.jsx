import Button from "../ui/button/Button";
import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import classes from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Logo />
      <Navigation />
      <Button className={classes.sidebar__button + " " + classes.mb32}>Добавить заказ
        <img className={classes.sidebar__img + " " + classes.ml17} src="assets/images/sidebar__buttons/add.svg" alt="" />
      </Button>
      <Button className={classes.sidebar__button}>Оплата
        <img className={classes.sidebar__img + " " + classes.ml33} src="assets/images/sidebar__buttons/pay.svg" alt="" />
      </Button>
    </div>
  )
}

export default Sidebar;