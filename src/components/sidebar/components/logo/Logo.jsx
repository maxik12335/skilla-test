import classes from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src="assets/images/logo/logo.svg" alt="logo" />
    </div>
  )
}

export default Logo;